import Modal from "react-modal";
import { Link } from 'react-router-dom';

import closeIcon from '../../assets/icons/close.svg';
import Button from "../Button";

import { Container  } from "./styles";

function ConfirmNewRideModal(props) {
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
            Tudo certo!
          </h1>

          <p>
            Sua carona foi criada com sucesso
          </p>
          
          <Link to="/my-rides">
            <Button width="200px">
              Ok!
            </Button>
          </Link>
        </Container>
      </Modal>
  );
}

export default ConfirmNewRideModal;