import styled from "styled-components"

export const Container = styled.div`
    section {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 30px 0 20px 0;
        margin: 0 16px;

        border-bottom: 1px solid #DBDBDB;
    }

    form {
        width: 90vw;
        max-width: 600px;

        margin: 30px auto;
        padding: 30px 20px;

        border: 1px solid #EBEBEB;
        border-radius: 15px;

        h2 {
            font-size: 14px;
            margin-bottom: 10px;
        }

        textarea {
            width: 100% !important;
            height: 80px;
            resize: none;

            border-radius: 10px;
            border: 1px solid #C7C7C7;

            padding: 10px;
            margin-bottom: 35px;

            font-family: 'Ubuntu';

            outline: none;
        }

        button {
            display: block;

            margin: 35px auto 0 auto;
        }
    }

    
`;

export const RideValue = styled.input`
    width: 100px;
    border-radius: 10px;
    border: 1px solid #C7C7C7;

    padding: 6px 10px;

    outline: none;
`;

export const PlaceInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    word-break: break-word;

    input {
        border: none;
        border-bottom: 1px solid #C7C7C7;

        outline: none;

        padding: 5px 0;
    }

    div:nth-child(1) {
        img {
            margin-right: 20px;
            width: 14px;
        }

        div {
            display: flex;
            align-items: center;
        }

        div:nth-child(2) {
            margin: 10px 0;
        }
    }

    div:nth-child(2) {
        display: flex;

        span {
            padding: 10px;
            margin-left: 24px;

            border-radius: 5px;

            cursor: pointer;
        }

        span:nth-child(1) {
            background: #DC8C8C;
        }

        span:nth-child(2) {
            background: #37474F;
        }
    }
`;

export const Table = styled.div`
    margin-top: 25px;

    table {
        width: 100%;
        margin-bottom: 25px;
        border-collapse: collapse;

        text-align: center;
    }

    table td, table th {
        border: 1px solid #EBEBEB;

        padding: 7px 0;
    }

    table td input {
        width: 100%;
    }

    span, p {
        font-size: 12px;
    }

    p {
        margin-bottom: 25px;
    }

    span {
        display: inline-block;
        font-size: 12px;
        text-decoration: underline;
        
        cursor: pointer;
    }
`;