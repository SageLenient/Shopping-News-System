import React from 'react';
import { connect } from 'react-redux';
import { defaultCoreCipherList } from 'constants';
const mapStateToProps = state=>{
    return {
      cart: state.cart
    }
}
class Cart extends React.Component{
    showCart(){
        var jsx = [];
        var carts=this.props.cart;
        if(carts.length==0){
            return(
                <div id="ncc-null-shopping">
                    <h4>您的购物车还没有商品</h4>
                    <p>
                        <a className="btn btn-sm btn-success m-r-10" href="#/product">马上去购物</a>　　
                        <a className="btn btn-sm btn-default" href="javascript:">查看自己的订单</a>
                    </p>
                </div>
            )
        }
        for(let i=0;i<carts.length;i++){
            jsx.push(<li key={i}><img src={carts[i].img}/><span>{carts[i].title}</span>
            　　<i>数量{carts[i].quantity}</i>　　<i>单价￥{carts[i].price.number}</i>　　
            <em>共￥{carts[i].subTotal}</em>　　<a onClick={()=>this.deleteList(carts[i])} className="btn btn-danger">删除</a></li>)
        };
        return jsx;
    }
    deleteList(liData){
        var cartLists=this.props.cart.length;
        var IdList=liData.id;
        for(let i=0;i<cartLists;i++){
            if(this.props.cart[i].id==IdList){
                var flag=confirm('你确定删除吗？');
                if(flag){
                    this.props.cart.splice(i,1);
                    this.setState({
                        cart:this.props.cart
                    })
                    return
                }else{
                    return
                }
            }
        }
        
    }
    render(){
        const {cart}=this.props;
        return(
            <div className="wrap">
                <div>
                    <div className="cart-title">
                        <h3>我的购物车</h3>
                        <h5>查看购物车中所添加的商品；增加减少数量、并勾选确认想要购买的商品进入下一步操作。</h5>
                    </div>
                    {/* <div className="cart-list">
                        <div className="cart-thead">
                            <ul className="columns">
                                <li className="col-check">
                                    <span className="checkbox-frame">
                                        <label><input type="checkbox" className="checkbox-input checkall-btn" id="checkall-btn1" autoComplete="off"/>全选</label>
                                    </span>
                                </li>
                                <li className="col-goods">商品</li>
                                <li className="col-quantity">数量</li>
                                <li className="col-unitprice">单价</li>
                                <li className="col-amount">金额</li>
                            </ul>
                        </div>
                    </div> */}
                </div>
                <hr/>
                    <ul>
                        {this.showCart()}
                    </ul>
                </div>
        )
    }
}
const CartContainer = connect(mapStateToProps)(Cart);
export default CartContainer;