import React, { Fragment, useEffect, useState } from 'react'
// icons.
import xIcon from '../../icons/x.png'
// styled components.
import { CardBuy } from '../../styled-components/ShoppingStyled';
// redux
import { useSelector } from 'react-redux';

function ShoppingPage({products, setProducts, callb, allPrices, callback}) {
  const openMenuShopping = useSelector(state => state.openMenuShopping.value)

  const handleDeleteItem  = Uid => {
    const elements = products.filter(x => x.element.id !== Uid );
    setProducts(elements)
  }
  // code to add objects.
  const [priceTotal, setPriceTotal] = useState(0)
  useEffect(() => {
    const sumPriceTotal = () => {
      const total = allPrices.reduce((a, b) => a + b, 0);
      setPriceTotal(total)
    }
    sumPriceTotal()
    // eslint-disable-next-line
  }, [callb, handleDeleteItem])

  
return (
    <Fragment>
      <CardBuy showMenu={openMenuShopping} >
      {
        products.map(item => <div key={item.element.id}>
          <div>
          <img src={item.element.image} alt="" width="55px"/>
          <img src={xIcon} alt="" width="33px" onClick={ () => handleDeleteItem(item.element.id) & callback(item.element.price)} />
          </div>
        </div > ) 
      }
      <h1>{priceTotal} $</h1>
      </ CardBuy>
    </Fragment>
  )
}

export default ShoppingPage
