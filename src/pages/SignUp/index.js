import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';

import InputSignUp from "../../components/InputSignUp"
import Button from "../../components/Button";

import { Container, Header, Main } from "./styles";
import { formatPhoneNumber, isEmailFromUFPE } from '../../utils';

import cameraIcon from '../../assets/icons/camera.svg';

function SignUp() {
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)

    const onPhotoChange = e => {
        // upload to firebase
        // get url
        // set url as photo state
    }

    const onNameChange = e => {
        const { value } = e.target;

        setName(value);

        if (!value) {
            setErrors({
                ...errors,
                name: "Campo obrigatório"
            })
        } else {
            setErrors({
                ...errors,
                name: ""
            })
        }
    }

    const onEmailChange = e => {
        const { value } = e.target;

        setEmail(value);

        if (!isEmailFromUFPE(value)) {
            setErrors({
                ...errors,
                email: "É necessário ter uma conta UFPE"
            })
        } else {
            setErrors({
                ...errors,
                email: ""
            })
        }
    }

    const onPhoneNumberChange = e => {
        const { value } = e.target;

        setPhone(value);

        if (formatPhoneNumber(value).length < 11) {
            setErrors({
                ...errors,
                phone: "Número de celular inválido"
            })
        } else {
            setErrors({
                ...errors,
                phone: ""
            })
        }
    }

    const onPasswordChange = e => {
        const { value } = e.target;

        setPassword(value);

        if (value.length < 6) {
            setErrors({
                ...errors,
                password: "É necessário ter, no mínimo, 6 dígitos"
            })
        } else {
            setErrors({
                ...errors,
                password: ""
            })
        }
    }

    const onSubmitForm = e => {
        e.preventDefault();

        // const exitsError = !Object.values(errors).every(error => error === "");
    }

    const isFormValid = () => {
        const exitsError = !Object.values(errors).every(error => error === "");
        return !exitsError & !!name & !!email & !!formatPhoneNumber(phone) & !!password;
    }

    useEffect(() => {
        if (isFormValid()) {
            setIsSubmitButtonDisabled(false)
        } else {
            setIsSubmitButtonDisabled(true)
        }
    }, [errors])

    return (
        <Container>
            <Header>
                <h1>
                    CInbora
                </h1>
            </Header>

            <Main>
                <h2>
                    Cadastre-se
                </h2>

                <form onSubmit={onSubmitForm}>
                    <label htmlFor="photo">
                        <Avatar
                            alt={name}
                            src={photo}
                            sx={{ width: 100, height: 100, bgcolor: '#EBEBEB' }}
                        >
                            <img src={cameraIcon} alt="Camera Icon" />
                        </Avatar>

                        <input
                            type="file"
                            name="photo"
                            id="photo"
                            onChange={onPhotoChange}
                        />

                        <span>Inserir foto</span>
                    </label>

                    <section>
                        <InputSignUp
                            type='text'
                            icon='name'
                            placeholder='Nome completo'
                            onChange={onNameChange}
                            value={name}
                            error={errors.name}
                            required={true}
                        />

                        <InputSignUp
                            type='email'
                            icon='email'
                            placeholder='E-mail'
                            onChange={onEmailChange}
                            value={email}
                            error={errors.email}
                            required={true}
                        />

                        <InputSignUp
                            type='text'
                            icon='phone'
                            placeholder='Telefone'
                            onChange={onPhoneNumberChange}
                            value={phone}
                            mask={'(99) 9 9999-9999'}
                            error={errors.phone}
                            required={true}
                        />

                        <InputSignUp
                            type='password'
                            icon='password'
                            placeholder='Senha'
                            onChange={onPasswordChange}
                            value={password}
                            error={errors.password}
                            required={true}
                        />
                    </section>

                    <Button
                        type='submit'
                        width='215px'
                        disabled={isSubmitButtonDisabled}
                    >
                        Criar conta
                    </Button>
                </form>
            </Main>
        </Container>
    );
}

export default SignUp;