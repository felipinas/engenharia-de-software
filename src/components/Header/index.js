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
                                <Link to="/feed">
                                    <li>
                                        <img src={homeIcon} alt="" />
                                        Ínicio
                                    </li>
                                </Link>

                                <Link to="/profile">
                                    <li>
                                        <img src={profileIcon} alt="" />
                                        Meu Perfil
                                    </li>
                                </Link>

                                <Link to="/my-rides">
                                    <li>
                                        <img src={carIcon} alt="" />
                                        Minhas caronas
                                    </li>
                                </Link>
                                
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