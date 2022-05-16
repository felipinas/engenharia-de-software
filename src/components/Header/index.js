import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'

import { Container, Nav } from './styles';

import homeIcon from '../../assets/icons/home.svg';
import profileIcon from '../../assets/icons/user.svg';
import carIcon from '../../assets/icons/car.svg';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const onClickMenu = () =>  setIsNavOpen(state => !state);

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
                                    <Link to="/my-rides">
                                        Minhas caronas
                                    </Link>
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