import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

import EmailConfirmModal from '../../components/EmailConfirmModal';
import Header from '../../components/Header';

import { useAuth } from '../../contexts/AuthContext';

import { Container } from './styles';
import cameraIcon from '../../assets/icons/camera.svg';


function Feed() {
  const [isEmailConfirmModalOpen, setIsEmailConfirmModalOpen] = useState(true);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleCloseEmailConfirmModal = () => setIsEmailConfirmModalOpen(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {
        currentUser.emailVerified ?
          (
            <>
              <Header />
              <Container>
                <Avatar
                  alt={currentUser.displayName}
                  src={currentUser.photoURL}
                  sx={{ width: 100, height: 100, bgcolor: '#EBEBEB', zIndex: -1 }}
                >
                  <img src={cameraIcon} alt="Camera Icon" />
                </Avatar>
                  
                <h1>Olá, {currentUser.displayName}</h1>
                <p>Em breve, teremos mais novidades...</p>

                <span onClick={handleLogout}>Deslogar</span>
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