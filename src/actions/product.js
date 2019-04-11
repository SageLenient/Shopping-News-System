import axios from 'axios';
var gUrl='http://localhost:3000/';

export const getListData=(data)=>{
    return {
        type:'GETDATA',
        payload:data
    }
}

export function resData1(params={page:1}){
    return dispatch=>{
        return axios({
            url:`${gUrl}product`,//?_page=${params.page}&_limit=5
            method:'post'
        }).then(res=>{
            var data={
                total:res.headers['x-total-count'],
                list:res.data
            };
            dispatch(getListData(data))
        })
    }
}