import React, { Fragment, useEffect, useState } from 'react'
// icons.
import xIcon from '../../icons/x.png'

function ShoppingPage({products, setProducts, callb, allPrices, callback}) {
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
        <h1>{priceTotal} $</h1>
      {
        products.map(item => <div key={item.element.id}>
          <img src={item.element.image} alt="" width="55px"/>
          <img src={xIcon} alt="" width="33px" onClick={ () => handleDeleteItem(item.element.id) & callback(item.element.price)} />
        </div> ) 
      }
    </Fragment>
  )
}

export default ShoppingPage
