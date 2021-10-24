import React, { Fragment } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { setDataApi } from '../../redux-toolkit/slices/DataApi';

function Categories() {
  const dispatch = useDispatch()
  // code to get the fake store api.
  const getProductos = async url => {
    const url_api = await fetch(url);
    const res_json = await url_api.json();
    dispatch(setDataApi(res_json))
  }
  const electronic = 'https://fakestoreapi.com/products/category/electronics'
  const jewelery = 'https://fakestoreapi.com/products/category/jewelery'
  const mens_clothing = "https://fakestoreapi.com/products/category/men's clothing"
  const womens_clothing = "https://fakestoreapi.com/products/category/women's clothing"
  const all = "https://fakestoreapi.com/products"
   
  return (
    <Fragment>
      <div>
        <button onClick={() => getProductos(all)}>Alls</button>
        <button onClick={() => getProductos(electronic)}>Electronics</button>
        <button onClick={() => getProductos(jewelery) } >Jewelery</button>
        <button onClick={() => getProductos(mens_clothing)} >Men's clothing</button>
        <button onClick={() => getProductos(womens_clothing)} >Women's clothing</button>
      </div>
    </Fragment>
  )
}

export default Categories
