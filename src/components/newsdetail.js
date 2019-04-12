import React,{Component} from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import { addComment } from "../actions/comment";
import newsdetail from '../style/npdetail.css'
const _ = require('lodash');

const mapStateToProps = (state)=>{
    return {
        comment:state.comment,
    }
}
class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            list:{}
        }
    }
    componentDidMount(){
        axios({
            url:`http://211.159.182.250:3002/news/${this.props.match.params.id}`,
            method:'get'
        }).then(res=>{
            this.setState({
                list:res.data[0]
            });
        })
    }
    clearComment(){
        this.refs.commentArea.value=''
    }
    newComment(){
        var jsx = [];
        if(this.props.comment.length!==0){
            var pos = _.findIndex(this.props.comment,{id:Number(this.props.match.params.id)});
            if(pos!=-1){
                var comments=this.props.comment[pos].comments;
            }else{
                comments=[];
            }
        }else{
            comments=[];
        }
        if(comments.length==0){
            return(
                <div id="ncc-null-shopping">
                    <h4>本新闻还没有任何评论</h4>
                    <p>
                        <a className="btn btn-sm btn-success m-r-10" data-toggle="modal" data-target="#myModal">马上添加评论</a>　　
                    </p>
                </div>
            )
        }
        for(let i=0;i<comments.length;i++){
            jsx.push(<li key={i}><p>{comments[i]}</p><div className='comment'><a onClick={()=>this.deleteComment(pos,i)} className="btn btn-danger">删除</a>　　</div><hr/></li>)
        };
        return jsx;
    }
    deleteComment(index,commentsIndex){
        if(confirm("你确定删除吗")){
            this.props.comment[index].comments.splice(commentsIndex,1);
            this.setState({
                comment:this.props.comment[index].comments,
                commentNum:this.props.comment[index].comments.length
            })
        }
    }
    render(){
        var liData=this.state.list;
        return(
            <div className='Detail wrap'>
                <h1>新闻提要:{liData.title}</h1>
                <div className='np-content'>
                    <img src={liData.img}/>
                    <br/>
                    {liData.content}<br/>
                    <p style={{position:'relative',height:'30px'}}><a className="btn btn-primary btn-lg active" onClick={()=>{this.newComment();this.clearComment()}} data-toggle="modal" data-target="#myModal" style={{position:"absolute",right:'25px'}} role="button">评论</a></p>
                </div>
                <div className="modal fade" tabIndex="-1" id='myModal' role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">添加评论</h4>
                        </div>
                        <div className="modal-body" style={{height:'200px'}}>
                            <textarea ref='commentArea' onChange={e=>{
                                this.setState({
                                    comment:e.target.value
                                })
                            }} placeholder='请输入评论内容' style={{width:"100%",height:'100%',border:'none',outline:'none',whiteSpace:'normal',wordWrap:'break-word',wordBreak:'break-all'}}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>this.props.addComment(this.state.list,this.state.comment)}>提交</button>
                        </div>
                        </div>
                    </div>
                </div>
                <hr/>
                {this.newComment()}
            </div>
        )
    }
}
const CommentContainer=connect(mapStateToProps,{addComment})(Detail);
export default CommentContainer