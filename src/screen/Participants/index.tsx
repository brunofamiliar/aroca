import React from 'react';

import {
    Container,
    Image
} from './styles';

interface AlternativesType {
    id: number;
    photo: string,
    name: string,
    overlap: boolean,
    isSelected: number,
    onClick: (event: Event) => void
}

const Participants = (props: AlternativesType ) => {
    return(
        <Container onClick={props.onClick}>
            <Image isSelected={props.isSelected} overlap={props.overlap} image={props.photo}></Image>
            <span>{props.name}</span>
        </Container>
    )
}

export default Participants;