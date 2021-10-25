import styled from 'styled-components';
import color from '../color&fonts/color.json'


export const CategoriesStyled = styled.div`
  padding: 2px 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-family: ${color.title};

  background: ${color.light};
  button {
    margin: 5px 5px ;
    padding: 10px 8px;
    width: 90px;
    border: none;
    font-size: 15px;
    background: ${color.green};
    color: #fff;
    transition: ease-in-out .3s;
    cursor: pointer;
  }
  button:hover{
    background: ${color.gray};
  }
  @media screen and (max-width: 425px){
    button {
      width: 75px;
      font-size: 12px;
    }
  }
`