import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: ${props => props.width || '100%'};
    border: none;
    border-radius: 26px;

    padding: 12px 12px;
    
    background-color: #C53F3F;
    color: white;
    font-weight: bold;

    cursor: pointer;

    &:disabled {
        background-color: #DC8C8C;
        cursor: not-allowed;
    }
`;
