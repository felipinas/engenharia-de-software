import Header from '../../components/Header';
import { Container } from './styles';

import plusIcon from '../../assets/icons/plus.svg';

function MyRides() {
  return (
      <>
        <Header />
        <Container>
            <section>
              <h1>Minhas caronas</h1>
            </section>

            <button type='button'>
              <img src={plusIcon} alt="More icon" />
              <span>Criar carona</span>
            </button>
        </Container> 
      </>
  );
}

export default MyRides;