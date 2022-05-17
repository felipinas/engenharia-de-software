import { Container } from './styles';

import circleIcon from '../../assets/icons/circle-gray.svg';
import markerIcon from '../../assets/icons/marker-gray.svg';
import searchIcon from '../../assets/icons/search.svg';

function Search(props) {
  return (
    <Container>
        <div>
            <img src={circleIcon} alt="circle icon" />

            <input
                type="text"
                placeholder='Saída'
                value={props.from}
                onChange={props.onSearchFromChange}
            />
        </div>

        <div>
            <img src={markerIcon} alt="marker location icon" />

            <input
                type="text"
                placeholder='Chegada'
                value={props.to}
                onChange={props.onSearchToChange}
            />
        </div>

        <img src={searchIcon} alt="search icon" />
    </Container>
  );
}

export default Search;