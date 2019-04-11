export const addComment =(data1,data2)=>{
    return {
        type:'ADDCOMMENT',
        payload:{data1,data2}
    }
}