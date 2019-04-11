import React from 'react';
import { connect } from 'react-redux';
import { resData } from '../actions/news';
import {NavLink} from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import style from '../style/news.css';
const mapStateToProps = (state)=>{
    return {
        list:state.news.list,
        total:state.news.total
    }
}
class News extends React.Component{
        showNews(){//新闻列表
            var jsx = [];
            var lists=this.props.list;
            for(var i=0;i<lists.length;i++){
                jsx.push(<NavLink key={i} to={`/news/${i}`}><div className='col-md-6 news-list'><LazyLoad height={10}><img src={lists[i].img}/></LazyLoad><h2>{lists[i].title}</h2></div></NavLink>)
            };
            return jsx;
        }
    render(){
        return(
            <div className='row news'>
                {this.showNews()}
            </div>
        )
    }
    componentDidMount(){
        this.props.resData();
    }
}
//5、转换的状态值和方法通过connect连接将视图组件变成了容器组件，这意味着组件中就有了属性数据，但此时只是属性操作，与仓库并无联系。
const NewsContainer = connect(mapStateToProps,{resData})(News);
export default NewsContainer;