import Header from '../../components/Header';
import { Container } from './styles';
import { Link, useNavigate } from 'react-router-dom';

import plusIcon from '../../assets/icons/plus.svg';

function MyRides() {
  return (
      <>
        <Header />
        <Container>
            <section>
              <h1>Minhas caronas</h1>
            </section>

            <Link to="/create-ride">
              <button type='button'>
                <img src={plusIcon} alt="More icon" />
                <span>Criar carona</span>
              </button>
            </Link>
        </Container> 
      </>
  );
}

export default MyRides;