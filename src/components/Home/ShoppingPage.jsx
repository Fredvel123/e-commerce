import React, { Fragment } from 'react'
// icons.
import xIcon from '../../icons/x.png'

function ShoppingPage({products, setProducts}) {
  const handleDeleteItem  = Uid => {
    const elements = products.filter(x => x.item.id !== Uid );
    setProducts(elements)
  }
  
return (
    <Fragment>
      {
        products.map(item => <div key={item.item.id}>
          <img src={item.item.image} alt="" width="55px"/>
          <img src={xIcon} alt="" width="33px" onClick={ () => handleDeleteItem(item.item.id)} />
        </div> ) 
      }
    </Fragment>
  )
}

export default ShoppingPage
