import { useState } from 'react'; 
import Modal from "react-modal";
import { useNavigate } from 'react-router-dom';

import Button from "../Button";

import closeIcon from '../../assets/icons/close.svg';
import { deleteRide } from '../../api/rides.api';
import { Container  } from "./styles";

function DeleteRideModal(props) {

    const [finalMessage, setFinalMessage] = useState('');

    const handleDeleteRide = async () => {
        try {
            await deleteRide(props.rideId);

            setFinalMessage("Carona deletada com sucesso!");
            
            setTimeout(() => {
                window.location.reload();
            }, 1000);        
        } catch (error) {
            setFinalMessage("Houve um erro!")
        }
    }

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
            type="button"
            onClick={props.onRequestClose}
            className="react-modal-close"
            >
            <img src={closeIcon} alt="Fechar modal" />
            </button>

            <Container>
                <h1>
                    Tem certeza?
                </h1>

                <p>
                    Se você apagar esta carona, ela deixará de ser mostrada no feed.
                </p>

                <span>{finalMessage}</span>

                <Button width='190px' onClick={handleDeleteRide}>
                    Excluir carona
                </Button>
            </Container>
        </Modal>
    );
}

export default DeleteRideModal;