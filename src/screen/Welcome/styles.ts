import styled from 'styled-components';

interface ContainerProps {
    image: string
}

interface LogoProps {
    logo: string
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: 100% 100%;
  padding: 0 50px;
  background-repeat: no-repeat;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.purpleDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span{
    font-family: 'Montserrat', 'Arial', sans-serif;
    font-size: 18px;
    width: 210px;
    text-align: center;
    margin-top: 2rem;
    word-wrap: break-word;
    z-index: 999;
  }

  .version{
    font-family: 'Courier New', 'Arial', sans-serif;
    font-size: 14px;
    position: absolute;
    bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
`

export const Overlap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(180deg, rgba(184,19,199,1) 0%, rgba(99,9,107,1) 100%);
  opacity: 0.5;
  top: 0;
  left: 0;
`

export const Logo = styled.div<LogoProps>`
  width: 267px;
  height: 67px;
  background-image: url(${props => props.logo});
  background-size: 267px 67px;
  background-repeat: no-repeat;
  z-index: 999;
  top: 0;
  left: 0;
`
