import { useEffect, useState } from 'react';

import { Container } from './styles';

import illustrationImg from '../../assets/illustrationWhiteCar.svg';
import InputAuth from '../../components/InputAuth';
import Button from '../../components/Button';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const [submitError, isSubmitError] = useState("")

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

    const onSubmitForm = e => {
        e.preventDefault();
    }

    useEffect(() => {
        if (isFormValid()) {
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
        }
    }, [errors])

    return (
        <Container>
            <header>
                <h1>Cinbora</h1>

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

                        <span>Esqueceu a senha?</span>
                    </section>
                    
                    <Button type='submit' width="70%" disabled={isButtonDisabled}>
                        Entrar
                    </Button>
                </form>
                
            </main>
        </Container>
    );
}

export default Login;