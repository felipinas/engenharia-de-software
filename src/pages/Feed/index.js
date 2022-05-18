import { useState, useEffect } from 'react';

import EmailConfirmModal from '../../components/EmailConfirmModal';
import Header from '../../components/Header';
import RideCard from '../../components/RideCard';

import { useAuth } from '../../contexts/AuthContext';

import { Container } from './styles';
import Search from '../../components/Search';

import { GetRides } from '../../api/rides.api';

function Feed() {
  const [isEmailConfirmModalOpen, setIsEmailConfirmModalOpen] = useState(true);
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [rides, setRides] = useState([]);

  const { currentUser/* , logout */ } = useAuth();

  const handleCloseEmailConfirmModal = () => setIsEmailConfirmModalOpen(false);

  const onSearchFromChange = e => setSearchFrom(e.target.value);
  const onSearchToChange = e => setSearchTo(e.target.value);

  const getAllRides = async () => {
    const rides = await GetRides();

    setRides(rides);
  }

  useEffect(() => {
    getAllRides();
  }, [])

  return (
    <>
      {
        currentUser.emailVerified ?
          (
            <>
              <Header />
              <Container>
                <section>
                  <Search
                    from={searchFrom}
                    to={searchTo}
                    onSearchFromChange={onSearchFromChange}
                    onSearchToChange={onSearchToChange}
                  />
                </section>

                {
                  rides.map(ride => (
                    <RideCard
                      driverPhoto={ride.user.photo}
                      driverName={ride.user.name}
                      price={ride.price}
                      from={ride.departure}
                      to={ride.destination}
                      extraInfo={ride.extra_info}
                      moreInfo={true}
                    />
                  ))
                }
              </Container>
            </>
          ) :
          <EmailConfirmModal
            isOpen={isEmailConfirmModalOpen}
            onRequestClose={handleCloseEmailConfirmModal}
          />
      } 
    </>
  );
}

export default Feed;