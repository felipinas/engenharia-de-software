import { useState } from 'react'
import Modal from "react-modal";

import InputAuth from "../InputAuth"
import Button from "../Button";

import { Title, SubTitle, Box } from "./styles"
import { Container } from "../EmailConfirmModal/styles";

import closeIcon from '../../assets/icons/close.svg';

function PasswordRecuperationModal(props) {

  const [email, setEmail] = useState("");
  const [errorsEmail, setErrorsEmail] = useState("");

  const onEmailChange = e => {
    const { value } = e.target;

    setEmail(value);

    if (!value) {
        setErrorsEmail("Campo obrigatório")
    } else {
        setErrorsEmail("")
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
        
          <Title>
            Esqueceu sua senha?
          </Title>
          <SubTitle>
            Por favor, insira seu e-mail para receber um link de redefinição de senha
          </SubTitle>
          <InputAuth
            type='text'
            icon='email'
            placeholder='E-mail'
            onChange={onEmailChange}
            value={email}
            error={errorsEmail}
            required={true}
          />
          <Box>
            <Button width='60%'>
              Enviar link
            </Button>
          </Box>
        </Container>
      </Modal>
  );
}


export default PasswordRecuperationModal;