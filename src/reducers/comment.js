var initialState = [];
var _            = require('lodash');

function comments(state=initialState,action){
    switch(action.type){
        case "ADDCOMMENT":
            var pos = _.findIndex(state,{id: action.payload.data1.id});
            if(pos !== -1){
                if(state[pos].comments){
                    state[pos].comments.unshift(action.payload.data2);
                    return [...state]
                }else{
                    state[pos].comments=[];
                    state[pos].comments.unshift(action.payload.data2);
                    return [...state]
                }
            }else{
                action.payload.data1.comments=[];
                action.payload.data1.comments.unshift(action.payload.data2);
                return [...state,action.payload.data1]
            }
        default:
            return state;
    }
}
export default comments