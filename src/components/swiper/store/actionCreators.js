import {CHANGE_INPUT_VALUE,INIT_AJAX_DATA,INIT_BANNER_DATA,INIT_RANK_DATA} from './actionType';
import network from '../axios/index.js';
export const getChangeitemGeneral = (value)=>({
    type:  CHANGE_INPUT_VALUE,
    value
})


export const initAjaxInitData = (data)=>({
    type:  INIT_AJAX_DATA,
    data
})

export const getAjaxInitData = ()=>{
    return (dispatch)=>{
        network('rankDetail', {
            "albumid":"129632",
        }).then(function(res){
            const data = res.data;
            const action = initAjaxInitData(data);
            dispatch(action);
        })
    }
}


//获取图片轮播的接口
// const initBannerData = (data)=>({
//     type:  INIT_BANNER_DATA,
//     data
// })

const initBannerData = function(data){
    console.log(data)
    return {
        type:  INIT_BANNER_DATA,
        bannerList:data
    }
}

export const getBannerInit = ()=>{
    return (dispatch)=>{
        network('banner').then(function(res){
            const data = res.data.info;
            const action = initBannerData(data);
            dispatch(action);
        })
       
    }
}



