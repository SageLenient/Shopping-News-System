import React,{Component} from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import { addToCart } from '../actions/cart';
import productdetail from '../style/npdetail.css'
class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            list:{}
        }
    }
    componentDidMount(){
        axios({
            url:`http://211.159.182.250:3002/product/${this.props.match.params.id}`,
            method:'get'
        }).then(res=>{
            this.setState({
                list:res.data[0]
            });
        })
    }
    
    render(){
        var liData=this.state.list;
        return(
            <div className='Detail wrap'>
                <h1>产品详情:{liData.title}<br/></h1>
                <div style={{position:'relative'}} className='np-content'>
                    <img src={liData.img}/>
                    <br/>
                    {liData.content}<br/>
                    <p style={{position:'relative',height:'30px'}}><a href="javascript:" onClick={()=>this.props.addToCart(liData)} className="btn btn-primary btn-lg active" style={{position:"absolute",right:25}} role="button">加入购物车</a>                    </p>
                    
                </div>
            </div>
        )
    }
}
const DetailContainer=connect(null,{addToCart})(Detail);
export default DetailContainer