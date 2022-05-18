import { PlaceInfo, Container, Table, RideValue } from "./styles";
import circleIcon from '../../assets/icons/circle-black.svg';
import dotsIcon from '../../assets/icons/dots.svg';
import localIcon from '../../assets/icons/local.svg';
import { AddRide } from "../../api/rides.api";
import { useState } from 'react';
import Header from '../../components/Header';
import ConfirmNewRideModal from '../../components/ConfirmNewRideModal'

import Button from '../../components/Button';

import { useAuth } from '../../contexts/AuthContext';

const CreateRide = () => {
    const [departure, setDeparture] = useState("");
    const [departure_agenda, setDeparture_agenda] = useState("");
    const [destination, setDestination] = useState("");
    const [destination_agenda, setDestination_agenda] = useState("");
    const [extra_info, setExtra_info] = useState("");
    const [price, setPrice] = useState("");

    const [modalIsOpen, setIsModalOpen] = useState(false)

    function handleOpenModal() {
        setIsModalOpen(true)
    }

    function handleCloseModal() {
        setIsModalOpen(false)
    }

    const { currentUser } = useAuth();

    const onDepartureChange = e => {
        const { value } = e.target;
        setDeparture(value);
    }
    const onDestinationChange = e => {
        const { value } = e.target;
        setDestination(value);
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
        handleOpenModal()
    }

    return(
        <>
            <Header />
            <Container>
                <section>
                <h1>Minhas caronas</h1>
                </section>
                <form onSubmit={onSubmitForm}>
                    <PlaceInfo> 
                        <div>
                            <div>
                                <img src={circleIcon} alt="circle icon" />
                                <input
                                    type="text"
                                    placeholder="Local de saída"
                                    onChange={onDepartureChange}
                                />
                            </div>
                            <div>
                                <img src={dotsIcon} alt="" />
                            </div>
                            <div>
                                <img src={localIcon} alt="location icon" />
                                <input
                                    type="text"
                                    placeholder="Local de chegada"
                                    onChange={onDestinationChange}
                                />
                            </div>
                        </div>
                    </PlaceInfo>

                    <Table>
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
                                <td>
                                    <select>
                                        <option value="">00h</option>
                                    </select>
                                </td>
                                <td>
                                    <select>
                                        <option value="">00h</option>
                                    </select>
                                </td>
                                <td>
                                    <select>
                                        <option value="">00h</option>
                                    </select>
                                </td>
                                <td>
                                    <select>
                                        <option value="">00h</option>
                                    </select>
                                </td>
                                <td>
                                    <select>
                                        <option value="">00h</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <th>Chegada</th>
                                <td>
                                    <select>
                                        <option value="">00h</option>
                                    </select>
                                </td>
                                <td>
                                    <select>
                                        <option value="">00h</option>
                                    </select>
                                </td>
                                <td>
                                    <select>
                                        <option value="">00h</option>
                                    </select>
                                </td>
                                <td>
                                    <select>
                                        <option value="">00h</option>
                                    </select>
                                </td>
                                <td>
                                    <select>
                                        <option value="">00h</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </Table>

                    <h2>Informações adicionais</h2>

                    <textarea
                        type="text"
                        placeholder="Insira aqui rotas dos bairros em que passa ou informações que são importantes para você"
                        onChange={onExtra_info}
                    />
                        
                    <h2>Valor da carona</h2>

                    <RideValue
                        type="number"
                        min={0}
                        placeholder='R$ 00,00'
                        onChange={onPriceChange}
                    />
                        
                    <Button width='70%' onClick={onSubmitForm}>
                        Criar carona
                    </Button>
                </form>
            </Container>
            <ConfirmNewRideModal isOpen={modalIsOpen} onRequestClose={handleCloseModal}/>
        </>
)
}

export default CreateRide