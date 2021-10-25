import styled from 'styled-components';
import color from '../color&fonts/color.json'

export const  AboutStyled = styled.div`
  height: 100vh;
  background: ${({open}) => open ? "#000000b7": ""};
  position: fixed;
  top: 0;
  left: 0;
  transition: ease-in-out .7s;
  transform: ${({open}) => open ? "translateX()": "translateX(-100%)" };
`
export const Card = styled.div`
  background: ${color.gray};
  margin: 20vh 20%; 
`
export const Button = styled.div`
  position: fixed;
  top: 15vh;
  right: 25%;
  color: #fff;
`