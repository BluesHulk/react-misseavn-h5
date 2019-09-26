import * as constants from './actionType.js'
const defaultStatus = {
     bannerList:[],
     sentimentList:[],
     channelList:[],
     recommendList:[],
     musicList:[],
     isShow:false,
     titleList:[],
     tips:"全部歌单",
     iocnList:[],
     albumDetail:[],
     soundList:[],
     soundDetail:[],
     currentTime:0,
     startOrPause:false,
     percent:0,
     rankList:[],
     channelsData:[]
}


export default (state = defaultStatus, action) =>{
        if(action.type === constants.INIT_BANNER_DATA){
            
             const newState = JSON.parse(JSON.stringify(state));
             newState.bannerList = action.bannerList.banner;
             newState.sentimentList = action.bannerList.sound.slice(0,3);
             newState.channelList = action.bannerList.channel;
            //  return {
            //    bannerList : action.bannerList.banner,
            //    sentimentList : action.bannerList.sound.slice(0,3),
            //    channelList:action.bannerList.channel,
            //  }
            return newState;
        }
        if(action.type === constants.INIT_RECOMMEND_DATA){
            const newState = JSON.parse(JSON.stringify(state));
            newState.recommendList = action.recommendList;
            return newState;
        }
        if(action.type === constants.INIT_MUSIC_DATA){
          console.log(action)
            const newState = JSON.parse(JSON.stringify(state));
            newState.musicList = action.musicList;
            return newState;
        }

        if(action.type === constants.INIT_ISSHOW){
              const newState = JSON.parse(JSON.stringify(state));
              newState.isShow = true;
              return newState;
        }

        if(action.type === constants.CANCLE_ISSHOW){
            const newState = JSON.parse(JSON.stringify(state));
            newState.isShow = false;
            return newState;
        }
        if(action.type === constants.CHOOSE_ITEM_INIT){
              const newState = JSON.parse(JSON.stringify(state));
              newState.titleList = action.titleList;
              return newState;
        }
        if(action.type === constants.INNER_TIPS){
            const newState = JSON.parse(JSON.stringify(state));
            newState.tips = action.value;
            return newState;
        }
        if(action.type === constants.ICON_CATALOGS){
            const newState = JSON.parse(JSON.stringify(state));
            newState.iocnList = action.iocnList;
            return newState;
        }
        if(action.type === constants.ALBUM_DETAIL){
            const newState = JSON.parse(JSON.stringify(state));
            newState.albumDetail = action.albumDetail.album;
            newState.soundList = action.albumDetail.sounds;
            return newState;
        }
        if(action.type === constants.SOUND_DETAIL){
            const newState = JSON.parse(JSON.stringify(state));
            newState.soundDetail = action.soundInit.sound;
            return newState;
        }
        if(action.type === constants.CURRENT_TIME){
            const newState = JSON.parse(JSON.stringify(state));
            newState.currentTime = action.value;
            return newState;
        }

        if(action.type === constants.PAUSE_START){
            const newState = JSON.parse(JSON.stringify(state));
            newState.startOrPause = action.value;
            return newState;
            
        }
        if(action.type === constants.PERCENT_UM){
            const newState = JSON.parse(JSON.stringify(state));
            newState.percent = action.value;
            return newState;
            
        }
        if(action.type === constants.INIT_RANK_DATA){
            const newState = JSON.parse(JSON.stringify(state));
            newState.rankList = action.rankList;
            return newState;
            
        }
        if(action.type === constants.CHANNELS_LIST){
            const newState = JSON.parse(JSON.stringify(state));
            console.log(action)
            newState.channelsData = action.channelsInit;
            return newState;
            
        }
        
        return state;

        
}