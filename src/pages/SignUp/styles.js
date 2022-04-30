import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const Header = styled.header`
    width: 100%;
    height: 25vh;
    min-height: 150px;
    max-height: 400px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #C53F3F;
    color: white;

    h1 {
        font-family: 'Titan One';
        font-weight: 400;
        font-size: 45px;

        margin-top: -20px;
    }
`;

export const Main = styled.main`
    width: 100%;
    max-width: 800px;

    flex: 1;

    margin: -20px auto   auto;
    padding: 30px 20px 60px 20px;

    background-color: #F5F5F5;

    border-radius: 20px 20px 0 0;

    h2 {
        color: #C53F3F;
        font-size: 36px;

        margin-bottom: 30px;
    }

    form {
        width: 85%;

        margin: auto;

        display: flex;
        flex-direction: column;
        align-items: center;

        label {
            margin-bottom: 30px;

            display: flex;
            flex-direction: column;
            align-items: center;

            cursor: pointer;

            input {
                display: none;
            }

            span {
                margin-top: 15px;
                color: #A6A6A6;
            }
        }

        section {
            display: grid;
            gap: 30px;
        }

        button {
            margin-top: 45px;
        }
    }
`;