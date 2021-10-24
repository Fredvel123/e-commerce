import React, { Fragment, useEffect, useState } from 'react'

function ItemAbout({page, callback}) {
  const [dataItem, setdataItem] = useState([]);
  const getItemInfo = async () => {
    const url_api = await fetch(`https://fakestoreapi.com/products/${page}`);
    const res_url = await url_api.json();
    setdataItem(res_url);
  }
  useEffect(() => {
    getItemInfo();
    // eslint-disable-next-line
  }, [callback])
  return (
    <Fragment>
      {dataItem ? 
      <div>
        <img src={dataItem.image} alt="" width="150"/>
        <h2>{dataItem.title}</h2>
        <h3>{dataItem.description}</h3>
        <h4>{dataItem.price}</h4>
      </div>
       : null}
    </Fragment>
  )
}

export default ItemAbout
