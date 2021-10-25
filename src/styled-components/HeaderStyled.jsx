import styled  from 'styled-components';
import color from '../color&fonts/color.json'


export const HeaderStyled = styled.div`
  background: ${color.grayDark};
  height: 20vh;
  color: ${color.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 50px;
    height: 50px;
    margin-right: 5%;
    cursor: pointer;
    transition: ease-in-out .2s;
  }
  img:hover {
    transform: scale(1.1);
  }
  h2 {
    margin-left: 5%;
    font-family: ${color.text};
    font-size: 35px;
  }
`