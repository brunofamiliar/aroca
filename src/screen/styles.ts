import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.backgrounds.lightest};
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.purpleDark};
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  position: relative;

  .question{
    font-family: 'Montserrat', 'Arial', sans-serif;
    font-size: 24px;
    font-weight: 400;
    width: 410px;
    color: #000000;
    word-wrap: break-word;
  }
`

export const WrapperPoll = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 15%;

  .survey{
    display: flex;
    margin-top: 8%;
    width: 100%;
  }

  .wrap{

    &-button-and-processed-votes{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;

      padding: 0.5rem 0 1rem 0;
    }

    &-voting-buttons{
      margin-top: 2rem;
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-processed-votes{
      font-family: 'Montserrat', 'Arial', sans-serif;
      font-size: 16px;
      color: #000000;

      span{
        margin-left: 3px;
      }

      &-green{
        color: ${props => props.theme.colors.green}
      }

      &-red{
        color: ${props => props.theme.colors.red}
      }
    }
  }
`