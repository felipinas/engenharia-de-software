import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

import InputAuth from "../../components/InputAuth"
import Button from "../../components/Button";
import Loading from "../../pages/Loading";

import { Container, Header, Main, Back } from "./styles";
import { formatPhoneNumber, isEmailFromUFPE } from '../../utils';
import { errorTranslator } from '../../utils/errorTranslator';
import { useAuth } from '../../contexts/AuthContext';

import cameraIcon from '../../assets/icons/camera.svg';
import { app } from '../../firebase-config';

function SignUp() {
    const [photoSource, setPhotoSource] = useState("");
    const [photoToUpload, setPhotoToUpload] = useState("");
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

    const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const { signUp } = useAuth();
    const navigate = useNavigate();

    const onPhotoChange = async e => {
        const file = e.target.files[0]
        
        const src = URL.createObjectURL(file);

        setPhotoToUpload(file);
        setPhotoSource(src);
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

    const onSubmitForm = async e => {
        e.preventDefault();

        if (isFormValid()) {
            try {
                setIsLoading(true);
                
                await signUp({
                    photo: photoToUpload,
                    name,
                    email,
                    phoneNumber: formatPhoneNumber(phone),
                    password
                });

                navigate('/feed');
            } catch(error) {
                setIsLoading(false)
                setSubmitError(errorTranslator(error))
            }
        }
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
        <>
            {
                isLoading ? <Loading /> : 
                (
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
                                src={photoSource}
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

                            <p>Inserir foto</p>
                        </label>

                        <section>
                            <InputAuth
                                type='text'
                                icon='name'
                                placeholder='Nome completo'
                                onChange={onNameChange}
                                value={name}
                                error={errors.name}
                                required={true}
                            />

                            <InputAuth
                                type='email'
                                icon='email'
                                placeholder='E-mail'
                                onChange={onEmailChange}
                                value={email}
                                error={errors.email}
                                required={true}
                            />

                            <InputAuth
                                type='text'
                                icon='phone'
                                placeholder='Telefone'
                                onChange={onPhoneNumberChange}
                                value={phone}
                                mask={'(99) 9 9999-9999'}
                                error={errors.phone}
                                required={true}
                            />

                            <InputAuth
                                type='password'
                                icon='password'
                                placeholder='Senha'
                                onChange={onPasswordChange}
                                value={password}
                                error={errors.password}
                                required={true}
                            />
                        </section>

                        <span>{submitError}</span>

                        <Button
                            type='submit'
                            width='215px'
                            disabled={isSubmitButtonDisabled}
                        >
                            Criar conta
                        </Button>
                    </form>

                    <Back>
                        <span>Já possui uma conta?</span>
                        <Link to='/login'>Faça o login</Link>
                    </Back>
                </Main>
            </Container>
                )
            }
        </>  
    );
}

export default SignUp;