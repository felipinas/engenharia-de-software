import { useState } from 'react';
import { Avatar } from '@mui/material';
import { Container, HeaderInfo, PlaceInfo, MoreRideInfos } from './styles';

import circleIcon from '../../assets/icons/circle-black.svg';
import dotsIcon from '../../assets/icons/dots.svg';
import localIcon from '../../assets/icons/local.svg';
import trashIcon from '../../assets/icons/trash.svg';
import pencilIcon from '../../assets/icons/pencil.svg';

function RideCard(props) {
    const [isInfoVisible, setIsInfoVisible] = useState(false);

    const handleDeleteRide = id => {};

    const handleToggleInfo = () =>  setIsInfoVisible(state => !state)

    return (
        <Container>
            <HeaderInfo>
                <div>
                    <Avatar
                        src={''}
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
                            <span onClick={handleDeleteRide(props.rideId)}>
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
                                        <h2>Horários</h2>
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
                                                <th>Saída</th>
                                                <td>9h</td>
                                                <td>15h</td>
                                                <td>15h</td>
                                                <td>9h</td>
                                                <td>15h</td>
                                            </tr>

                                            <tr>
                                                <th>Chegada</th>
                                                <td>11h</td>
                                                <td>17h</td>
                                                <td>15h</td>
                                                <td>11h</td>
                                                <td>15h</td>
                                            </tr>
                                        </table>

                                        <h2>Informações adicionais</h2>

                                        <p>{props.extraInfo}</p>  
                                    </>
                                ) : null
                            }

                            <span onClick={handleToggleInfo}>
                                Ver {isInfoVisible ? 'menos' : 'mais'}
                            </span>
                        </MoreRideInfos>

                        <button type='button'>
                            Entrar em contato
                        </button>
                    </>
                ) : null
            }

            
        </Container>
    );
}

export default RideCard;