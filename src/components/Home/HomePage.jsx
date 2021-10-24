import React, { Fragment, useEffect } from 'react'
// redux
import {useDispatch, useSelector} from 'react-redux';
import {setDataApi} from '../../redux-toolkit/slices/DataApi'

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

  return (
    <Fragment>
      <h1>This will be the home page</h1>
      <div>
        {dataApi.map(item => <img src={item.image} alt="" width="75px" /> )}
      </div>
    </Fragment>
  )
}

export default HomePage
