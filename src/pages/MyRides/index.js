import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import RideCard from '../../components/RideCard';

import plusIcon from '../../assets/icons/plus.svg';

import { useAuth } from '../../contexts/AuthContext';

import { GetRidesById } from '../../api/rides.api';

import { Container } from './styles';

function MyRides() {
  const [userRides, setUserRides] = useState([]);

  const { currentUser } = useAuth();

  const getAllUserData = async () => {
    const userRiders = await GetRidesById(currentUser.uid)

    setUserRides(userRiders);
  };

  useEffect(() => {
    getAllUserData()
  }, [])

  return (
      <>
        <Header />
        <Container>
            <section>
              <h1>Minhas caronas</h1>
            </section>

            <Link to="/create-ride">
              <button type='button'>
                <img src={plusIcon} alt="More icon" />
                <span>Criar carona</span>
              </button>
            </Link>

            {
              userRides.map(ride => (
                <RideCard
                  key={ride.rideId}
                  driverPhoto={currentUser.photoURL}
                  driverName={currentUser.displayName}
                  price={ride.price}
                  from={ride.departure}
                  to={ride.destination}
                  rideId={ride.rideId}
                  editable={true}
                  moreInfo={false}
                />
              ))
            }
        </Container>
      </>
  );
}

export default MyRides;