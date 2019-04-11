import React,{Component} from 'react';
import { connect } from 'react-redux';
import { resData } from '../actions/news';
import { resData1 } from '../actions/product';
import {NavLink} from 'react-router-dom';
const mapStateToProps = state=>{
    return {
      listNews:state.news.list,
      listProduct:state.product.list
    }
}

class Home extends React.Component{
    numRandom(min,max){
      return Math.ceil(Math.random()*(max-min)+min)
    }
    componentDidMount(){
      this.props.resData();
      this.props.resData1();
    }
    showNews(){//新闻列表
      var jsx = [];
      if(this.props.listNews.length>0){
        var lists=this.props.listNews;
        var arr=[];
        for(var i=0;i<4;i++){
            var num=this.numRandom(0,79);
            if(arr.indexOf(num)==-1){
              arr.push(num);
              jsx.push(<NavLink key={num} to={`/news/${num}`}><div className='col-md-6 news-list'><img src={lists[num].img}/><h2>{lists[num].title}</h2></div></NavLink>)
            }else{
              i--
            }
        };
        return jsx;
      }
    }
    showProduct(){//新闻列表
      var jsx = [];
      if(this.props.listProduct.length>0){
        var lists=this.props.listProduct;
        var arr=[];
        for(var i=0;i<4;i++){
            var num=this.numRandom(0,79);
            if(arr.indexOf(num)==-1){
              arr.push(num);
              jsx.push(<div className='col-md-6 news-list'><NavLink key={num} to={`/product/${num}`}><img src={lists[num].img}/><h2>{lists[num].title}</h2></NavLink></div>)
            }else{
              i--
            }
        };
        return jsx;
      }
    }
    render(){
      // console.log(this.)
        return (
        <div>  
          <div style={{overflow:'hidden'}}>
              
              <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <img src="http://pic1.win4000.com/wallpaper/7/57ac3605353a8.jpg" style={{width:'100%',height:'400px'}} alt="..." />
                    <div className="carousel-caption">

                    </div>
                  </div>
                  <div className="item">
                    <img src="http://image4.cnpp.cn/upload/images/20141224/17020337126_1920x1080.jpg" style={{width:'100%',height:'400px'}} alt="..." />
                    <div className="carousel-caption">

                    </div>
                  </div>
                  <div className="item">
                    <img src="http://pic1.win4000.com/wallpaper/7/57ac3605353a8.jpg" style={{width:'100%',height:'400px'}} alt="..." />
                    <div className="carousel-caption">

                    </div>
                  </div>
                </div>
                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
          </div>
          <div><h2 style={{textIndent:20}}>新闻推荐</h2><hr/>{this.showNews()}</div><br/>
          <div><hr/><h2 style={{textIndent:20}}>产品推荐</h2><hr/>{this.showProduct()}</div>
        </div>
        )
    }
}
const HomeContainer=connect(mapStateToProps,{resData,resData1})(Home)
export default HomeContainer