import styled from "styled-components";
import color from '../color&fonts/color.json'

export const CardBuy = styled.div`
  width: 25%;
  background: ${color.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: ${color.text};
    margin-top: 10px;
  }
  p {
    margin-top: 25px;
    font-size: 16px;
    font-family: ${color.title};
  }
  /* transition: ease-in-out .5s; */
  
  @media screen and (max-width: 550px){
    height: 80vh;
    position: fixed;
    top: 20vh;
    right: 0;
    width: 50%;
    transform: ${({showMenu}) => showMenu ? "translateX()" : "translateX(100%)" };
    transition: ${({showMenu}) =>showMenu ? "ease-in-out .5s": "ease-in-out .1s"  };
    overflow-y: auto;
  }
`

export const CardShopping = styled.div`
  background: ${color.gray};
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  justify-content: space-evenly;
  margin: 10px 0;
`