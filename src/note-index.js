import React from 'react'
import ReactDOM from 'react-dom';
import style from './main.css'
import { createStore } from 'redux';
import { connect,Provider } from 'react-redux';
//1、创建仓库
const store = createStore(reducer);
//2、仓库数据的初始化操作
//3、此时的初始值是一个state状态，和下面的Counter组件没有建立关系

function reducer(state = {counter:0,abc:22},action){
    switch(action.type){
        case 'INCREASE': 
            return {counter: state.counter + 1,abc:state.abc};
        default: 
            return state;
    }
}
//所以需要将状态转属性
const mapStateToProps = (state)=>{
    return {
        counter: state.counter,//状态值转换为属性
        abc:state.abc
    }
}
//4、此时状态已转换为属性值，但仍未与Counter组件建立联系，所以需要建立联系Counter组件 mapStateToProps
class Counter extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                Counter: {this.props.counter}
                <hr />
                ABC:{this.props.abc}
                <hr />
                <button onClick={this.props.incresae}>increase</button>
            </div>
        )
    }
}
const mapDispatchToProps = {
    incresae:()=>{
        return {
            type: 'INCREASE'
        }
    }
}
//5、转换的状态值和方法通过connect连接将视图组件变成了容器组件，这意味着组件中就有了属性数据，但此时只是属性操作，与仓库并无联系。
const CounterContainer = connect(mapStateToProps,mapDispatchToProps)(Counter);
//6、需要用<Provider store={store}></Provider>将整个仓库数据提供给容器组件
ReactDOM.render(<Provider store={store}><CounterContainer/></Provider>,document.getElementById('app'));