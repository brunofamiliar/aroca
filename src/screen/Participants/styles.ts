import styled from 'styled-components';

interface ContainerProps {
    image: string,
    overlap: boolean,
    isSelected: number
}

export const Image = styled.div<ContainerProps>`
  position: relative;
  height: 140px;
  width: 140px;
  border: ${props => props.isSelected == -1 ? 'none' : props.overlap ? 'none' : '3px solid #B813C7'};
  border-radius: 5px;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  padding: 0 50px;
  background-repeat: no-repeat;
  overflow: hidden;
  opacity: ${props => props.overlap ? 0.5 : 1 }
`

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000000;
  border: none;
  background-color: transparent;
  cursor: pointer;

  font-family: 'Berlin Sans FB', 'Arial', sans-serif;
  font-size: 18px;

  span{
    margin-top: 10px;
  }

  &:not(:first-child){
    margin-left: 15px;
  }
`