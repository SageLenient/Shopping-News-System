import news from './news'
import product from './product'
import cart from './cart'
import comment from './comment'
import  { combineReducers } from 'redux'

export default combineReducers({
    news,
    product,
    cart,
    comment
})