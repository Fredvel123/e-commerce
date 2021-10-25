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
  background: ${color.light};
  margin: 10vh 20%; 
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${color.dark};
  img {
    margin-top: 10px;
    margin-bottom: 7px;
  }
  h2 {
    font-family: ${color.title};
    padding: 6px 10%;
    font-size: 20px;
  }
  h3 {
    padding: 6px 10%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
  }
  h4 {
    padding: 6px 10%;
    font-size: 20px;
    color: ${color.green};
    font-family: ${color.text};
    border: 2px ${color.green} solid;
  }
  @media screen and (max-width: 375px) {
    margin: 10vh 5%;
    h2 {
    padding: 6px 5%;
    font-size: 15px;
  }
  h3 {
    padding: 6px 5%;
    font-size: 13px;
  }
  }
`
export const Button = styled.img`
  width: 38px;
  position: fixed;
  top: 7vh;
  right: 7%;
  color: #fff;
  @media screen and (max-width: 375px) {
    top: 2vh;
    right: 5%;
  }
`