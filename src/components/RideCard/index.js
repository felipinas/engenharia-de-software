import { useState } from 'react';
import { Avatar } from '@mui/material';
import { Container, HeaderInfo, PlaceInfo, MoreRideInfos, Button } from './styles';

import { formatWhatsappApiLink } from '../../utils';

import circleIcon from '../../assets/icons/circle-black.svg';
import dotsIcon from '../../assets/icons/dots.svg';
import localIcon from '../../assets/icons/local.svg';
import trashIcon from '../../assets/icons/trash.svg';
import pencilIcon from '../../assets/icons/pencil.svg';
import Wpp from '../../assets/icons/Wpp.svg';
import DeleteRideModal from '../DeleteRideModal';

function RideCard(props) {
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

    const handleOpenDeleteModal = () => setIsModalDeleteOpen(true);
    const handleCloseDeleteModal = () => setIsModalDeleteOpen(false);

    const handleToggleInfo = () =>  setIsInfoVisible(state => !state)

    return (
        <>
            <Container>
                <HeaderInfo>
                    <div>
                        <Avatar
                            src={props.driverPhoto}
                            variant="rounded"
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '15px',
                                zIndex: -1
                            }}    
                        />

                        <h1>{props.driverName}</h1>
                    </div>

                    <div>
                        <span>R$ {props.price}</span>
                    </div>
                </HeaderInfo>
                
                <PlaceInfo> 
                    <div>
                        <div>
                            <img src={circleIcon} alt="circle icon" />
                            <span>{props.from}</span>
                        </div>
                        <div>
                            <img src={dotsIcon} alt="" />
                        </div>
                        <div>
                            <img src={localIcon} alt="location icon" />
                            <span>{props.to}</span>
                        </div>
                    </div>

                    {
                        props.editable ? (
                            <div>
                                <span onClick={handleOpenDeleteModal}>
                                    <img src={trashIcon} alt="trash icon" />
                                </span>

                                <span>
                                    <img src={pencilIcon} alt="pencil icon" />
                                </span> 
                            </div>
                        ) : null
                    }
                </PlaceInfo>
                
                {
                    props.moreInfo ? (
                        <>
                            <MoreRideInfos>
                                {
                                    isInfoVisible ? (
                                        <>
                                            <h2>Hor??rios</h2>
                                            <table>
                                                <tr>
                                                    <th></th>
                                                    <th>S</th>
                                                    <th>T</th>
                                                    <th>Q</th>
                                                    <th>Q</th>
                                                    <th>S</th>
                                                </tr>

                                                <tr>
                                                    <th>Sa??da</th>
                                                    <td>--</td>
                                                    <td>--</td>
                                                    <td>--</td>
                                                    <td>--</td>
                                                    <td>--</td>
                                                </tr>

                                                <tr>
                                                    <th>Chegada</th>
                                                    <td>--</td>
                                                    <td>--</td>
                                                    <td>--</td>
                                                    <td>--</td>
                                                    <td>--</td>
                                                </tr>
                                            </table>

                                            {
                                               props.extraInfo ? (
                                                   <>
                                                        <h2>Informa????es adicionais</h2>

                                                        <p>{props.extraInfo}</p>  
                                                   </>
                                               ) : null
                                            }
                                            
                                        </>
                                    ) : null
                                }

                                <span onClick={handleToggleInfo}>
                                    Ver {isInfoVisible ? 'menos' : 'mais'}
                                </span>
                            </MoreRideInfos>
                            
                            <a
                                href={formatWhatsappApiLink(props.driverPhoneNumber)}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button type='button'>
                                    <img src={Wpp} alt="wpp icon" />
                                    <span>Entrar em contato</span>
                                </Button>
                            </a>
                        </>
                    ) : null
                }
            </Container>

            <DeleteRideModal
                isOpen={isModalDeleteOpen}
                onRequestClose={handleCloseDeleteModal}
                rideId={props.rideId}
            />
        </>
        
    );
}

export default RideCard;