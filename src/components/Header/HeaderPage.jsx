import React, {Fragment} from 'react';
// styled components
import { HeaderStyled } from '../../styled-components/HeaderStyled';
// icons
import cart from '../../icons/cart.png'

function HeaderPage() {
  return(
    <Fragment>
      <HeaderStyled>
        <h2>Shopping App</h2>
        <img src={cart} alt="" />
      </HeaderStyled>
    </Fragment>
  )
}
export default HeaderPage;