import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

import { Container } from './styles';

import { useAuth } from '../../contexts/AuthContext';

import cameraIcon from '../../assets/icons/camera.svg';
import EmailConfirmModal from '../../components/EmailConfirmModal';

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
      <Container>
          {
            currentUser.emailVerified ?
            (
              <>
                <Avatar
                  alt={currentUser.displayName}
                  src={currentUser.photoURL}
                  sx={{ width: 100, height: 100, bgcolor: '#EBEBEB' }}
                >
                  <img src={cameraIcon} alt="Camera Icon" />
                </Avatar>
                
                <h1>Olá, {currentUser.displayName}</h1>
                <p>Em breve, teremos mais novidades...</p>

                <span onClick={handleLogout}>Deslogar</span>
              </>
            ) :
            <EmailConfirmModal
            isOpen={isEmailConfirmModalOpen}
            onRequestClose={handleCloseEmailConfirmModal}
            />
          } 
      </Container>
  );
}

export default Feed;