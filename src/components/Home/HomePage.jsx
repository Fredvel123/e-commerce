import React, { Fragment, useEffect, useState } from 'react'
// mini components
import Categories from './Categories';
import ItemAbout from './ItemAbout';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {setDataApi} from '../../redux-toolkit/slices/DataApi'
import ShoppingPage from './ShoppingPage';
import { Card, Cards, CardStyle } from '../../styled-components/HomeStyled';

function HomePage() {
  const dataApi = useSelector(state => state.dataApi.value);
  const dispatch = useDispatch()
  // code to get the fake store api.
  const getProductos = async url => {
    const url_api = await fetch(url);
    const res_json = await url_api.json();
    dispatch(setDataApi(res_json))
  }
  useEffect(() => {
    getProductos('https://fakestoreapi.com/products');
    // eslint-disable-next-line
  }, [])
  // Products Added
  // const [ProductsAdded, setProductsAdded] = useState([]);

  const [products, setProducts] = useState([]);
  const addProducts = element => {
    setProducts([...products, {element}]);
  }
  const [allPrices, setallPrices] = useState([]);
  const getAllPrices = (prices) => {
    setallPrices([...allPrices, prices])
  }
  // delete price items
  const removePrices = (name) => {
    const elem = allPrices.filter(x => x !== name);
    setallPrices(elem) 
  }
  // page item
  const [page, setPage] = useState(0);
  const [itemOpen, setItemOpen] = useState(false);
  const changePage = data => {
    setPage(data)
  }
  return (
    <Fragment>

      <Cards>
      <Categories />
        {dataApi.map(item => 
        <CardStyle key={item.id}>
          <img src={item.image} alt="" width="75px" />
          <button onClick={() => addProducts(item) & getAllPrices(item.price)}  >Add the cart</button>
          <button onClick={() => changePage(item.id) & setItemOpen(true)} >See More</button>
        </CardStyle>)}
      </Cards>
      <ShoppingPage
        products={products}
        setProducts={setProducts}
        callb={addProducts}
        allPrices={allPrices}
        callback={removePrices} />
      <ItemAbout page={page} callback={changePage} open={itemOpen} close={setItemOpen} />
    </Fragment>
  )
}

export default HomePage
