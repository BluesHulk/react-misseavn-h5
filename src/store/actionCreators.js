import { 
    CHANGE_INPUT_VALUE,
    INIT_AJAX_DATA,
    INIT_BANNER_DATA,
    INIT_RECOMMEND_DATA,
    INIT_MUSIC_DATA,
    INIT_ISSHOW,
    CHOOSE_ITEM_INIT,
    INNER_TIPS,
    ICON_CATALOGS,
    ALBUM_DETAIL,
    SOUND_DETAIL,
    CURRENT_TIME,
    PAUSE_START,
    PERCENT_UM,
    INIT_RANK_DATA,
    CHANNELS_LIST
} from './actionType';
import network from '../axios/index.js';

export const getChangeitemGeneral = (value)=>({
    type:  CHANGE_INPUT_VALUE,
    value
})
export const isShowItem = (value)=>({
    type:  INIT_ISSHOW,
    value
})
export const innerTips = (value)=>({
    type:  INNER_TIPS,
    value
})
export const pauseStart = (value)=>({
    type:  PAUSE_START,
    value
})
export const percent_um = (value)=>({
    type:  PERCENT_UM,
    value
})

export const currentTime = (value)=> ({
    type : CURRENT_TIME,
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
    return {
        type:  INIT_BANNER_DATA,
        bannerList:data
    }
}

const initRecommendData = function(data){
    return {
        type:  INIT_RECOMMEND_DATA,
        recommendList:data
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


export const listRecommend = ()=>{
    return (dispatch)=>{
        network('listRecommend').then(function(res){
            const data = res.data.music
            const action = initRecommendData(data);
            dispatch(action);
         })
    }
}

export const musicInit = function(data){
    return {
        type:  INIT_MUSIC_DATA,
        musicList:data
    }
}
export const musicList =(id)=>{
    return (dispatch)=>{
        network("musicList",{
            order:0,
            tid:id
        }).then(function(res){
            const data = res.data.albums
            const action = musicInit(data);
            dispatch(action);
        })
    }
}

export const titleList = function(data){
    return {
        type:CHOOSE_ITEM_INIT,
        titleList:data
    }
}

export const titleInit =()=>{
    return (dispatch)=>{
        network("recommend").then(function(res){
            const data = res.data.info;
            const action = titleList(data);
            dispatch(action);
        })
    }
}
export const iocnCatalogs = function(data){
    return {
        type:ICON_CATALOGS,
        iocnList:data
    }
}

export const catalogs = ()=>{
    return (dispatch)=>{
        network("iocnCatalogs").then(function(res){
             const data = res.data.info;
             const action = iocnCatalogs(data);
             dispatch(action)
        })
    }
}


export const albumDetail = function(data){
    return {
        type:ALBUM_DETAIL,
        albumDetail:data
    }
}



export const listOfAlbum = (id)=>{
    return (dispatch)=>{
        network("rankDetail",{
            albumid:id
        }).then(function(res){
             const data = res.data.info;
             const action = albumDetail(data);
             dispatch(action)
        })
    }
}

//audio

export const soundDetail = function(data){
    return{
        type:SOUND_DETAIL,
        soundInit:data
    }
}

export const SoundOfDetail = (id)=>{
    return (dispatch)=>{
        network("soundDeatil",{
            soundid:id
        }).then(function(res){
             const data = res.data.info;
             const action = soundDetail(data);
             dispatch(action)
        })
    }
}

const initRankData = function(data){
    console.log(data)
    return {
        type:  INIT_RANK_DATA,
        rankList:data
    }
}

export const rankList = ()=>{
    return (dispatch)=>{
        network("rankList").then(function(res){
            const data = res.data.info;
            const action = initRankData(data);
            dispatch(action);
        })
    }
}



export const channelsListData = function(data){
    return{
        type:CHANNELS_LIST,
        channelsInit:data
    }
}


export const channelsList = (type)=>{
    return (dispatch)=>{
        network("channelsList",{
            type:type
        }).then(function(res){
             const data = res.data.info;
             const action = channelsListData(data);
             dispatch(action)
        })
    }
}
