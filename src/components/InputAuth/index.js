import { useState } from "react";
import InputMask from 'react-input-mask';

import { Container } from "./styles";

import nameIcon from '../../assets/icons/user.svg';
import emailIcon from '../../assets/icons/email.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import passwordIcon from '../../assets/icons/lock.svg';
import eyeIcon from '../../assets/icons/eye.svg';
import eyeCrossedIcon from '../../assets/icons/eye-crossed.svg';

const iconNames = {
    name: nameIcon,
    email: emailIcon,
    phone: phoneIcon,
    password: passwordIcon
}

function InputAuth(props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleSeePassword = () => {
        setIsPasswordVisible(prevState => !prevState)
    };

    return (
        <Container>
            <div>
                <img src={iconNames[props.icon]} alt="Icon" />

                <InputMask
                    mask={props.mask}
                    type={isPasswordVisible ? 'text' : props.type}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                    required={props.required}
                    autoComplete="on"
                />

                {
                    (props.type === 'password') ?
                    <img
                        src={isPasswordVisible ? eyeCrossedIcon : eyeIcon}
                        alt="See password"
                        onClick={handleSeePassword}
                        style={{
                            cursor: 'pointer',
                            opacity: props.value.length > 0 ? '1' : '0',
                            pointerEvents: props.value.length > 0 ? 'auto' : 'none'
                        }}
                    />
                    : null
                }
            </div>

            {
                props.error ? <span>{props.error}</span> : null
            }
        </Container>
    );
}

export default InputAuth;