import { configureStore } from '@reduxjs/toolkit'
import  cartslice  from './productSlices'

const store= configureStore({
  reducer: {cart: cartslice}
})


export default store;