import React from "react"

import { Container,  Wrapper, Title, FlexButtonContainer, Moldura, SubTitle, FlexTitleContainer} from "./styles"
import LogoHome from '../../assets/LogoHome.svg'

import Button from '../../components/Button';


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
                    <Button>
                        Fazer login 
                    </Button>

                    <Button>
                        Fazer cadastro
                    </Button>
                </FlexButtonContainer>
            </Wrapper>
        </Container>
    )
}

export default Home