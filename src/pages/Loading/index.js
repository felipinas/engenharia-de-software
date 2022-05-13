import { CircularProgress } from '@mui/material';

import { Container } from './styles';

function Loading() {
  return (
      <Container>
          <CircularProgress sx={{ color: 'black' }} />
          <h1>Carregando...</h1>
      </Container>
  );
}

export default Loading;