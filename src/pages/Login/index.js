import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Container, OpenModalButton, Back } from './styles';

import InputAuth from '../../components/InputAuth';
import Button from '../../components/Button';
import PasswordRecuperationModal from '../../components/PasswordRecuperationModal'
import Loading from '../Loading';

import { useAuth } from '../../contexts/AuthContext';
import { errorTranslator } from '../../utils/errorTranslator';

import illustrationImg from '../../assets/illustrationWhiteCar.svg';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const [submitError, setSubmitError] = useState("")

    const [isPasswordRecuperationModalOpen, setIsPasswordRecuperationModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();
    const { login } = useAuth();

    const isFormValid = () => {
        const exitsError = !Object.values(errors).every(error => error === "");
        return !exitsError & !!email & !!password;
    }
    
    const onEmailChange = e => {
        const { value } = e.target;

        setEmail(value);

        if (value.length <= 0) {
            setErrors({
                ...errors,
                email: "Campo obrigatório"
            })
        } else {
            setErrors({
                ...errors,
                email: ""
            })
        }
    }

    const onPasswordChange = e => {
        const { value } = e.target;

        setPassword(value);

        if (value.length <= 0) {
            setErrors({
                ...errors,
                password: "Campo obrigatório"
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

        try {
            setIsLoading(true);

            await login(email, password);

            navigate('/feed')
        } catch (error) {
            setIsLoading(false);
            setSubmitError(errorTranslator(error));
        }
    }

    const handleOpenPasswordRecuperationModal = () => {
        setIsPasswordRecuperationModalOpen(true)
    }
    const handleClosePasswordRecuperationModal = () => {
        setIsPasswordRecuperationModalOpen(false)
    }

    useEffect(() => {
        if (isFormValid()) {
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
        }
    }, [errors])

    return (
        <>
            {
                isLoading ? <Loading /> : 
                (
                    <Container>
                        <header>
                            <h1>CInbora</h1>

                            <img src={illustrationImg} alt="" />
                        </header>

                        <main>
                            <h2>Login</h2>
                            
                            <form onSubmit={onSubmitForm}>
                                <section>
                                    <InputAuth
                                        type='email'
                                        icon={'email'}
                                        value={email}
                                        placeholder='E-mail'
                                        error={errors.email}
                                        onChange={onEmailChange}
                                    />

                                    <InputAuth
                                        type='password'
                                        icon={'password'}
                                        value={password}
                                        placeholder='Senha'
                                        error={errors.password}
                                        onChange={onPasswordChange}
                                    />

                                    <p>{submitError}</p>

                                    <OpenModalButton onClick={handleOpenPasswordRecuperationModal}>
                                        Esqueceu a senha?
                                    </OpenModalButton>
                                    <PasswordRecuperationModal
                                        isOpen={isPasswordRecuperationModalOpen}
                                        onRequestClose={handleClosePasswordRecuperationModal}
                                    />
                                </section>
                                
                                <Button type='submit' width="70%" disabled={isButtonDisabled}>
                                    Entrar
                                </Button>
                            </form>

                            <Back>
                                <span>Ainda não possui conta?</span>
                                <Link to='/signup'>Faça o cadastro</Link>
                            </Back>
                            
                        </main>
                    </Container>
                )
            }
        </>
    );
}

export default Login;