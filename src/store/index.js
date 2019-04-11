import { createStore,applyMiddleware } from 'redux';
import reducer from '../reducers'
import thunk from 'redux-thunk';
//1、创建仓库
// const store = createStore(reducer);
const store = createStore(reducer,applyMiddleware(thunk));
export default store;