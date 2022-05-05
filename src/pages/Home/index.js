import React from "react"
import { Container,  Wrapper, Title, FlexButtonContainer, Button, Moldura, SubTitle, FlexTitleContainer} from "./styles"
import LogoHome from '../../assets/LogoHome.svg'


const Home = () => {
    return(
        <Container>
            <Wrapper>
                <FlexTitleContainer>
                    <Title>Cinbora</Title>
                    <SubTitle>Conectando a comunidade da UFPE por meio de caronas</SubTitle>
                </FlexTitleContainer> 
                <Moldura>
                    <img src={LogoHome} alt='LogoHome' />
                </Moldura>
                <FlexButtonContainer>  
                    <Button type="button">Fazer login</Button>
                    <Button type="button">Cadastro</Button>
                </FlexButtonContainer>
            </Wrapper>
        </Container>
    )
}

export default Home