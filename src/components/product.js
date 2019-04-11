import React from 'react';
import { connect } from 'react-redux';
import { resData1 } from '../actions/product';
import { addToCart } from '../actions/cart';
import {NavLink} from 'react-router-dom';
import style from '../style/product.css';
import LazyLoad from 'react-lazyload';
const mapStateToProps = (state)=>{
    return {
        list:state.product.list,
        total:state.product.total
    }
}

const ListItem=(li)=>{
    var productLink=`/product/${li.id}`;
    return (
        <li style={{position:"relative"}} className='product-li'>
            <NavLink to={productLink}>
                <LazyLoad height={10}><img src={li.img}/> </LazyLoad>
                <h2>{li.title}<p>　<i>￥{li.price?li.price.number:0}</i></p></h2>
                
            </NavLink>
            <a href="javascript:" onClick={(product)=>li.addToCart(li.product)} className="btn btn-primary btn-lg active" style={{position:"absolute",right:'10px',bottom:'10px'}} role="button">加入购物车</a>
        </li>
    )
}
class Product extends React.Component{
        changePage=(page)=>{
            this.props.resData1({page:page})
        }
        showPages(){//分页表
            var jsx=[];
            if(this.props.total>0){
                var pageList=Math.ceil(this.props.total/5);
                for(let i=0;i<pageList;i++){
                    jsx.push(<li key={i}><span onClick={()=>this.changePage(i+1)}>{i+1}</span></li>)
                }
            }
            return jsx
        }
        showProduct(){//产品列表
            var jsx = [];
            var lists=this.props.list;
            for(var i=0;i<lists.length;i++){
                jsx.push(<ListItem key={i} product={lists[i]} {...lists[i]} addToCart={this.props.addToCart}/>)
            };
            return jsx;
        }
    render(){
        return(
            <div className='product wrap'>
                {this.showProduct()}
                {/* <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li>
                        <span aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </span>
                        </li>
                        {this.showPages()}
                        <li>
                        <span href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </span>
                        </li>
                    </ul>
                </nav> */}
                <p>啊哦，不能再拽了，不如去看看新闻吧？</p>
            </div>
        )
    }
    componentDidMount(){
        this.props.resData1();
    }
}
//5、转换的状态值和方法通过connect连接将视图组件变成了容器组件，这意味着组件中就有了属性数据，但此时只是属性操作，与仓库并无联系。
const ProductContainer = connect(mapStateToProps,{resData1,addToCart})(Product);
export default ProductContainer;