import React from 'react';
import farmBackground from '../../../build/farm_background.jpg'
import LogoImage from '../../../build/logoWhite.png'
import { version } from '../../../package.json';

import {
    Container,
    Overlap,
    Logo
} from './styles';

const Welcome: React.FC = () => {
    return(
        <Container image={farmBackground}>
            <Overlap/>
            <Logo logo={LogoImage} />
            <span>
                Seu voto de forma fácil e inteligente!
            </span>
            <span className="version">
                Version { version }
            </span>
        </Container>
    )
}

export default Welcome;