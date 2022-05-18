import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'

import { useAuth } from '../../contexts/AuthContext';

import { Container, Nav } from './styles';

import homeIcon from '../../assets/icons/home.svg';
import profileIcon from '../../assets/icons/user.svg';
import carIcon from '../../assets/icons/car.svg';
import logoutIcon from '../../assets/icons/logout.svg';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const onClickMenu = () =>  setIsNavOpen(state => !state);

    const { logout } = useAuth();
    const navigate = useNavigate();

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
            <Container>
                <header>
                    <div>
                        <Hamburger
                            toggled={isNavOpen}
                            onToggle={onClickMenu}
                            size={20}
                            color={'white'}
                        />
                    </div>
                    <h1>CInbora</h1>
                </header>
                
                {
                    isNavOpen ? (
                        <Nav>
                            <ul onClick={onClickMenu}>
                                <li>
                                    <img src={homeIcon} alt="" />
                                    <Link to="/feed">
                                        Ínicio
                                    </Link>
                                </li>

                                <li>
                                    <img src={profileIcon} alt="" />
                                    <Link to="/profile">
                                        Meu Perfil
                                    </Link>
                                    
                                </li>

                                <li>
                                    <img src={carIcon} alt="" />
                                    <Link to="/create-ride">
                                        Criar Carona
                                    </Link>
                                    
                                </li>

                                <li>
                                    <img src={carIcon} alt="" />
                                    <Link to="/my-rides">
                                        Minhas caronas
                                    </Link>
                                </li>
                                
                                <li onClick={handleLogout}>
                                    <img src={logoutIcon} alt="" />
                                    <p>
                                        Deslogar
                                    </p>
                                </li>
                            </ul>
                        </Nav>
                    ) : null
                }
            </Container>
        </>
        
    );
}

export default Header;