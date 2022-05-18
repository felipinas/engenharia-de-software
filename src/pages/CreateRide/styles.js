import styled from "styled-components"

export const PlaceInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 0 0 23px;

    word-break: break-word;

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
export const Container = styled.div`
    width: 90vw;
    max-width: 600px;

    margin: 0 auto;
    padding: 20px;

    border: 1px solid #EBEBEB;
    border-radius: 15px;
`;

export const Table = styled.div`
    padding-left: 23px;
    margin-top: 25px;

    h2 {
        font-size: 14px;
        margin-bottom: 10px;
    }

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