var initialState = [];
var _            = require('lodash');

function cart(state=initialState,action){
    switch(action.type){
        case "ADDTOCARTS":
            var pos = _.findIndex(state,{id: action.payload.id});
            if(pos !== -1){
                // 直接修改节点
                state[pos].quantity = state[pos].quantity + 1;
                state[pos].subTotal = state[pos].quantity * state[pos].price.number;
                return [...state];
            }else{
                action.payload.quantity = 1;
                action.payload.subTotal = action.payload.price.number;
                return [...state,action.payload];
            }
            return state;
        default:
            return state;
    }
}
export default cart