import { useState } from 'react';

import EmailConfirmModal from '../../components/EmailConfirmModal';
import Header from '../../components/Header';

import { useAuth } from '../../contexts/AuthContext';

import { Container } from './styles';
import Search from '../../components/Search';

function Feed() {
  const [isEmailConfirmModalOpen, setIsEmailConfirmModalOpen] = useState(true);
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');

  const { currentUser/* , logout */ } = useAuth();

  const handleCloseEmailConfirmModal = () => setIsEmailConfirmModalOpen(false);

  const onSearchFromChange = e => setSearchFrom(e.target.value);
  const onSearchToChange = e => setSearchTo(e.target.value);

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