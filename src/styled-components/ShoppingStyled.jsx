import styled from "styled-components";
import color from '../color&fonts/color.json'

export const CardBuy = styled.div`
  width: 25%;
  background: ${color.gray};
  display: flex;
  flex-direction: column;
  /* transition: ease-in-out .5s; */
  
  @media screen and (max-width: 550px){
    position: fixed;
    top: 20vh;
    right: 0;
    width: 50%;
    transform: ${({showMenu}) => showMenu ? "translateX()" : "translateX(100%)" };
    transition: ${({showMenu}) =>showMenu ? "ease-in-out .5s": "ease-in-out .1s"  };
    overflow-y: auto;
    height: 80vh;
  }
`