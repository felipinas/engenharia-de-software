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

    main {
        width: 100%;
        max-width: 600px;

        margin: auto;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 60px;

        button {
            width: 170px;
            font-size: 16px;
        }
    }
`;

export const InputContainer = styled.div`
    display: grid;
    gap: 30px;

    margin: 60px 0;

    input {
        pointer-events: none;
    }
`;

