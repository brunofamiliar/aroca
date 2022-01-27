import styled from 'styled-components';

interface ButtonProps {
    disabled: boolean
}

export const ButtonComponent = styled.button<ButtonProps>`
    background: ${props => props.disabled ? props.theme.colors.grey : props.theme.colors.lighter};
    border: none;
    border-radius: 5px;

    padding: 15px 0;
    color: ${props => props.theme.colors.white};
    width: 70%;
    margin: .5rem 0;

    font-family: 'Montserrat', 'Arial', sans-serif;

    &:hover{
        opacity: ${props => props.disabled ? 1 : 0.7};
        cursor: ${props => props.disabled ? 'auto' : 'pointer'};
    }
`