import React, { Fragment, useEffect, useState } from 'react'
// mini components
import Categories from './Categories';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {setDataApi} from '../../redux-toolkit/slices/DataApi'
import ShoppingPage from './ShoppingPage';

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
  
  return (
    <Fragment>
      <Categories />
      
      {/* <button onClick={sumPriceTotal} >get Price total</button> */}
      <div>
        {dataApi.map(item => <div key={item.id}>
          <img src={item.image} alt="" width="75px" />
          <button onClick={() => addProducts(item) & getAllPrices(item.price)}  >Add the cart</button>
        </div>)}
      </div>
      <ShoppingPage products={products} setProducts={setProducts} callb={addProducts} allPrices={allPrices} />
    </Fragment>
  )
}

export default HomePage
