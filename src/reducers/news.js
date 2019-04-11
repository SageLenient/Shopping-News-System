
const originState={list:[],total:0};
//2、仓库数据的初始化操作
//3、此时的初始值是一个state状态，和下面的Counter组件没有建立关系

function reducer(state = originState,action){
    switch(action.type){
        case 'GETDATA':
            return Object.assign({...state,list:action.payload.list,total:action.payload.total})
        default: 
            return state;
    }
}
export default reducer;