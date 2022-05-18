import {  AddRide } from "../../api/rides.api";
import { useState } from 'react';
import { Container } from "@mui/material";
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
                        <div>
                            <input type="text" onChange={onDepartureChange}/>
                        </div>
                        <div>
                            <input type="text" onChange={onDeparture_agendaChange}/>
                        </div>
                        <div>
                            <input type="text" onChange={onDestinationChange}/>
                        </div>
                        <div>
                            <input type="text" onChange={onDestination_agendaChange}/>
                        </div>
                        <div>
                            <input type="text" onChange={onExtra_info}/>
                        </div>
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