import React, {Fragment} from 'react';
// styled components
import { HeaderStyled } from '../../styled-components/HeaderStyled';
// icons
import cart from '../../icons/cart.png'
// redux
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setOpenMenuShopping } from '../../redux-toolkit/slices/OpenMenu';

function HeaderPage() {
  const openMenuShopping = useSelector(state => state.openMenuShopping.value);
  const dispatch = useDispatch()
  
  const showMenu = () => {
    dispatch(setOpenMenuShopping(!openMenuShopping))
  }
  const scrollCloseMenu = () => {
    if (openMenuShopping === true) {
      showMenu()
    }
  }
  window.addEventListener("scroll", scrollCloseMenu)
return(
    <Fragment>
      <HeaderStyled>
        <h2>Shopping App</h2>
        <img src={cart} alt="" onClick={showMenu}/>
      </HeaderStyled>
    </Fragment>
  )
}
export default HeaderPage;