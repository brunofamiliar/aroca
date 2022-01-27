import React from 'react';

import {
    ButtonComponent
} from './styles';

interface ButtonProps {
    text: string,
    disabled: boolean,
    onClick?: (e:any) => void
}

const Button = (props: ButtonProps ) => {
    return(
        <ButtonComponent onClick={props.disabled ? () => {} : props.onClick} disabled={props.disabled}>{props.text}</ButtonComponent>
    )
}

export default Button;