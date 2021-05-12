import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [counter, setCounter] = useState(0)
  const addCounter = () => {
    setCounter(counter + 1)
    return counter
  }
  const [state, setState] = useState(initialState)

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
    state
  }
}

export default useInitialState