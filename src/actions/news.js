import axios from 'axios';
var gUrl='http://localhost:3000/';

export const getListData=(data)=>{
    return {
        type:'GETDATA',
        payload:data
    }
}

export function resData(){
    return dispatch=>{
        return axios({
            url:`${gUrl}news`,
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