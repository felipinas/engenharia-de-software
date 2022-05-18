import { PlaceInfo, Container, Table } from "./styles";
import circleIcon from '../../assets/icons/circle-black.svg';
import dotsIcon from '../../assets/icons/dots.svg';
import localIcon from '../../assets/icons/local.svg';
import {  AddRide, GetRide } from "../../api/rides.api";
import { useState } from 'react';
import { form } from "@mui/material";
import Header from '../../components/Header';

import { useAuth } from '../../contexts/AuthContext';

const CreateRide = () => {
    const [departure, setDeparture] = useState("");
    const [departure_agenda, setDeparture_agenda] = useState("");
    const [destination, setDestination] = useState("");
    const [destination_agenda, setDestination_agenda] = useState("");
    const [extra_info, setExtra_info] = useState("");
    const [price, setPrice] = useState("");

    const { currentUser } = useAuth();

    const onDepartureChange = e => {
        const { value } = e.target;
        setDeparture(value);
    }

    const onDeparture_agendaChange = e => {
        const { value } = e.target;
        setDeparture_agenda(value);
    }

    const onDestinationChange = e => {
        const { value } = e.target;
        setDestination(value);
    }

    const onDestination_agendaChange = e => {
        const { value } = e.target;
        setDestination_agenda(value);
    }

    const onExtra_info = e => {
        const { value } = e.target;
        setExtra_info(value);
    }

    const onPriceChange = e => {
        const { value } = e.target;
        setPrice(value);
    }

    const onSubmitForm = e => {
        e.preventDefault()
        AddRide({
            departure,
            departure_agenda,
            destination,
            destination_agenda,
            extra_info,
            price,
            user_id: currentUser.uid
        });
    }

    return(
        <>
        <Header />
        <Container>
                <form onSubmit={onSubmitForm}>
                <PlaceInfo> 
                    <div>
                        <div>
                            <img src={circleIcon} alt="circle icon" />
                            <span>{<input type="text" onChange={onDepartureChange}/>}</span>
                        </div>
                        <div>
                            <img src={dotsIcon} alt="" />
                        </div>
                        <div>
                            <img src={localIcon} alt="location icon" />
                            <span>{<input type="text" onChange={onDestinationChange}/>}</span>
                        </div>
                    </div>
                </PlaceInfo>
                    <div>
                        <input type="text" onChange={onDeparture_agendaChange}/>
                    </div>
                    <div>
                        <input type="text" onChange={onDestination_agendaChange}/>
                    </div>
                    <Table>
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

                                    <input type="text" onChange={onExtra_info}/>
                                </>
                    </Table>
                    <div>
                        <input type="text" onChange={onPriceChange}/>
                    </div>

                    <button type="submit">Criar</button>
                </form>
        </Container>
        </>
)
}

export default CreateRide