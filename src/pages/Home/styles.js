import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin: 30px;
    background: #FFF;
    border-radius: 4px;
    padding: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 500px;
`

export const Title = styled.h1`
    color: #C53F3F;
    font-family: Titan One;
    font-size: 48px;
    font-weight: 400;
    line-height: 55px;
    letter-spacing: 0em;
    text-align: center;

    margin-bottom: 8px;
`

export const SubTitle = styled.h2`
    width: 98%;
    max-width: 200px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.5px;
    text-align: center;
`

export const FlexButtonContainer = styled.div`
    width: 80%;
    max-width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    button {
        margin-bottom: 30px;
    }
`

export const Moldura = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    margin: 30px 0;

    img {
        width: 95%;
        max-width: 300px;
    }
`
export const FlexTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
