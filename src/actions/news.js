import axios from 'axios';
var gUrl='http://211.159.182.250:3002/';

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