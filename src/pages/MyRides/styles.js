import styled from 'styled-components';

export const Container = styled.div`
    section {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 30px 0 20px 0;
        margin: 0 16px;

        border-bottom: 1px solid #DBDBDB;
    }

    a {
        text-decoration: none;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 10px 18px;
        margin: 20px auto;

        background-color: #C53F3F;
        color: white;
        font-weight: 600;

        border: none;
        border-radius: 20px; 

        cursor: pointer;

        img {
            margin-right: 10px;
        }
    }
`;
