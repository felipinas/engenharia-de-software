import styled from 'styled-components';

export const Container = styled.div`
    width: 90vw;
    max-width: 600px;

    margin: 0 auto;
    padding: 20px;

    border: 2px solid #EBEBEB;
    border-radius: 15px;

    margin-bottom:  30px;

    a {
        text-decoration: none;
    }
`;

export const HeaderInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 15px;

    div:nth-child(1) {
        display: flex;
        align-items: center;
         
        h1 {
            margin-left: 15px;
            font-size: 18px;
            word-break: break-word;
        }
    }

    div:nth-child(2) {
        display: flex;
        justify-content: center;
        min-width: 100px;

        padding: 5px 0;
        margin-left: 20px;

        background: rgba(104, 187, 90, 0.39);
        border-radius: 7px;
    }
`;

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

export const MoreRideInfos = styled.div`
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

export const Button = styled.button`
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
    `;