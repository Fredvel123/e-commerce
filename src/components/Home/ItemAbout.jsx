import React, { Fragment, useEffect, useState } from 'react';
// styled components
import { AboutStyled, Button, Card } from '../../styled-components/ItemAboutStyled';


function ItemAbout({page, callback, open, close}) {
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
      <AboutStyled open={open} >
        <Card>
          <img src={dataItem.image} alt="" width="150"/>
          <h2>{dataItem.title}</h2>
          <h3>{dataItem.description}</h3>
          <h4>{dataItem.price}</h4>
        </Card>
          <Button onClick={() => close(false)} >Close</Button>
      </AboutStyled>
       : null}
    </Fragment>
  )
}

export default ItemAbout
