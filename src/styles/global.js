import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu';
  }

  input, button {
    font-family: 'Ubuntu'
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, .5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 90%;
    max-width: 450px;

    background: white;
    outline: none;

    padding: 4rem 3rem 2rem 3rem;
    border-radius: 20px;

    position: relative;
  }

  .react-modal-close {
    border: 0;
    background: transparent;

    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    transition: filter .2s;

    &:hover {
      filter: brightness(.8);
    }
  }
`