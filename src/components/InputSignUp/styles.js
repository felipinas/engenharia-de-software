import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    div {
        height: 40px;
        padding: 0 10px;

        display: flex;
        
        border-bottom: 1px solid #A6A6A6;
    }   

    img {
        width: 20px;
    }

    img[alt="Icon"] {
        margin-right: 20px;
    }

    input {
        width: 100%;
        background-color: transparent;

        border: none;
        outline: none;

        font-size: 20px;
        color: #37474F;

        &::placeholder {
            color: #C7C7C7;
        }
    }

    span {
        display: block;
        margin-top: 10px;
         
        font-family: 'Ubuntu';
        color: #C53F3F;
    }
`;
