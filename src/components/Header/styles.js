import styled from 'styled-components';

export const Container = styled.div`
    position: sticky;
    top: 0;

    header {
        width: 100%;

        padding: 16px 0;

        background-color: #C53F3F;

        display: flex;
        align-items: center;
        justify-content: center;
        
        div {
            position: absolute;
            left: 5px;
        }

        h1 {
            color: white;
            font-family: 'Titan One';
            font-weight: 300;

            span {
                font-size: 12px;
                margin-left: 10px;
                font-family: 'Ubuntu';
            }
        }
    }
`;

export const Nav = styled.nav`
    width: 100%;
    height: 100vh;

    background-color: #37474F66;

    position: absolute;

    ul {
        display: inline-block;
        background: white;

        padding: 0px 8px;

        border-radius: 0px 10px 10px 0px;

        li:nth-child(2), li:last-child {
            border-top: 1px solid #EBEBEB;
        }

        li:nth-child(2) {
            border-bottom: 1px solid #EBEBEB;
        }

        li {
            display: flex;
            align-items: center;

            padding: 12px 10px;

            font-size: 20px;
            color: #37474F;
            
            text-decoration: none;

            cursor: pointer;

            img {
                margin-right: 20px;
            }

            a {
                text-decoration: none;
                color: #37474F;
            }
        }

        a {
            text-decoration: none;
        }
    }
`;
