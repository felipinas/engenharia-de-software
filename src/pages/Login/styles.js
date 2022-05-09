import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    header {
        background-color: #C53F3F;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 50px 0;

        h1 {
            color: white;
            font: 400 50px 'Titan One';
        }
    }

    main {
        width: 100%;
        max-width: 800px;

        flex: 1;

        margin: -20px auto 0 auto;
        padding: 30px;

        border-radius: 20px 20px 0 0;

        background-color: white;

        @media (min-width: 800px) {
            background-color: #F5F5F5;
        }

        h2 {
            margin-bottom: 60px;

            color: #C53F3F;
            font-size: 36px;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;

            section {
                padding: 0 15px;

                p {
                    color: #C53F3F;
                    margin-bottom: 10px;
                }

                div ~ div {
                    margin: 30px 0 10px 0;
                }
            }

            button {
                margin-top: 60px;
                max-width: 220px;
            }
        }
    }
`;

export const OpenModalButton = styled.h3`
    height: 16px;
    width: 129px;
    left: 53px;
    top: 545px;
    border-radius: nullpx;
    font-family: Ubuntu;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.5px;
    text-align: left;
    cursor: pointer


`