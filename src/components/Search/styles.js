import styled from 'styled-components';

export const Container = styled.div`
    width: 80vw;
    max-width: 400px;

    display: flex;

    padding: 10px 15px;

    border: 1px solid #DBDBDB;
    border-radius: 12px;
    div {
        display: flex;

        img {
            margin-right: 10px;
        }

        input {
            width: 100%;

            padding: 0 10px 0 0;

            border: none;
            outline: none;
        }
    }

    span {
        width: 1px;
        height: 100%;

        background-color: black;
    }
`;
