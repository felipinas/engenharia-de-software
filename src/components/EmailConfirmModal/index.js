import Modal from "react-modal";

import closeIcon from '../../assets/icons/close.svg';
import Button from "../Button";

import { Container  } from "./styles";

function EmailConfirmModal(props) {
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
            E-mail de confirmação
          </h1>

          <p>
            Um link de confirmação foi enviado para o seu e-mail
          </p>

          <Button
            width='170px'
          >
            Reenviar link
          </Button>
        </Container>
      </Modal>
  );
}

export default EmailConfirmModal;