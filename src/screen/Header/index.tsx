import React, { useCallback, memo } from 'react';
import { FiX, FiMinus, FiSquare } from 'react-icons/fi'

import { remote } from 'electron';

import {
    Container,
    WindowActions,
    DefaultActionButton
} from './styles';

const Header: React.FC = () => {
    const handleCloseWindow = useCallback(() => {
        const window = remote.getCurrentWindow()
    
        window.close()
    }, []);

    const handleMaximize = useCallback(() => {
        const window = remote.getCurrentWindow()
    
        const { width: currentWidth, height: currentHeight } = window.getBounds()
    
        const {
          width: maxWidth,
          height: maxHeight
        } = remote.screen.getPrimaryDisplay().workAreaSize
    
        const isMaximized = currentWidth === maxWidth && currentHeight === maxHeight
    
        if (!isMaximized) {
          window.maximize()
        } else {
          window.unmaximize()
        }
      }, [])

    const handleMinimize = useCallback(() => {
        const window = remote.getCurrentWindow()

        window.minimize()
    }, [])

    return(
        <Container>
            <strong>A Roça</strong>
            <WindowActions position="right">
                <DefaultActionButton onClick={handleMinimize}>
                <FiMinus />
                </DefaultActionButton>
                <DefaultActionButton onClick={handleMaximize}>
                <FiSquare />
                </DefaultActionButton>
                <DefaultActionButton onClick={handleCloseWindow}>
                <FiX />
                </DefaultActionButton>
            </WindowActions>
        </Container>
    )
}

export default memo(Header)