import * as constants from './actionType.js'
const defaultStatus = {
     bannerList:[]
}


export default (state = defaultStatus, action) =>{
        switch(type){
          case constants.INIT_BANNER_DATA:
          // return Object.assign({}, state, {
          //      bannerList: state.bannerList.concat(action.bannerList.banner)
          // }); 
          return {...state , ...action.bannerList.banner}
         default: return state;

        }

        
}