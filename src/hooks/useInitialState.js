import { useState, useEffect } from 'react';
import axios from 'axios';
import initialState from '../initialState';

const API = 'http://localhost:1337/products';

const useInitialState = () => {
  const [counter, setCounter] = useState(0)
  const addCounter = () => {
    setCounter(counter + 1)
    return counter
  }
  const [state, setState] = useState(initialState)
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, [])

  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, { ...payload, id: addCounter() }]
    })
  }

  const removeFromCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.id !== payload.id)
    })
  };

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }

  return {
    removeFromCart,
    addToCart,
    addToBuyer,
    addNewOrder,
    products,
    state
  }
}

export default useInitialState