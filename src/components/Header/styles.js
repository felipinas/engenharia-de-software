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

        li:nth-child(2) {
            border-top: 1px solid #EBEBEB;
            border-bottom: 1px solid #EBEBEB;
        }

        li {
            display: flex;
            align-items: center;

            padding: 12px 10px;

            font-size: 20px;

            cursor: pointer;

            

            a {
                margin-left: 20px;
                text-decoration: none;
                color: #37474F;
            }
        }
    }
`;
