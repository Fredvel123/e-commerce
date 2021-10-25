import styled from 'styled-components';
import color from '../color&fonts/color.json'

export const Cards = styled.div`
  width: 75%;
  background: ${color.light};
  /* display: flex;
  justify-content: space-around;
  flex-wrap: wrap; */
  columns: 5 220px;
  @media screen and (max-width: 550px){
    width: 100%;
  }
`
export const CardStyle = styled.div`
  break-inside: avoid;
  display: flex;
  width: auto;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: center;
  background: ${color.white};
  img {
    margin: 10px 0;
    width: 75%;
  }
  button{
    width: 75%;
    height: 30px;
    margin: 3px 0;
    border: none;
    background: ${color.green};
    color: ${color.light};
    cursor: pointer;
    transition: .3s;
  }
  button:hover {
    background: ${color.grayDark};
  }

`

export const Main = styled.div`
  display: flex;
`

