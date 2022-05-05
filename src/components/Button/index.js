import { ButtonContainer } from "./styles";

function Button(props) {
    return (
        <ButtonContainer
            type={props.type ? props.type : 'button'}
            width={props.width}
            disabled={props.disabled ? true : false}
            onClick={props.onClick}
        >
            {props.children}
        </ButtonContainer>
    );
}

export default Button;