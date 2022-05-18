import { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';

import Header from '../../components/Header';
import InputAuth from '../../components/InputAuth';
import Button from '../../components/Button';
import { useAuth } from '../../contexts/AuthContext';

import { userApi } from '../../api/user.api';

import { Container, InputContainer } from './styles';


function Profile() {
    const { currentUser } = useAuth();

    const [userData, setUserData] = useState([]);
    
    const getUserInfo = async () => {
        const userData = await userApi.getInfoById(currentUser.uid);

        setUserData(userData);
    }

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <>
            <Header />
            <Container>
                <section>
                <h1>Meu perfil</h1>
                </section>

                <main>
                    <Avatar
                        src={currentUser.photoURL}
                        variant="rounded"
                        sx={{
                            width: 100,
                            height: 100,
                            borderRadius: '15px',
                            zIndex: -1
                        }}    
                    />

                    <InputContainer>
                        <InputAuth
                            type='text'
                            icon='name'
                            placeholder='Nome completo'
                            value={currentUser.displayName}
                        />

                        <InputAuth
                            type='text'
                            icon='phone'
                            placeholder='Telefone'
                            value={userData.phoneNumber}
                            mask={'(99) 9 9999-9999'}
                        />
                    </InputContainer>

                    <Button disabled>
                        Editar perfil
                    </Button>
                </main>
            </Container>
        </>
    );
}

export default Profile;