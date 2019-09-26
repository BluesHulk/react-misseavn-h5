
const baseUrl = "http://127.0.0.1:3000/missevan/";
export default {
    // 获得登录验证码
    getLoginVerificationCode: {
        url: "mapi/home/getProductList",
        method: 'GET',
    },
    userinfo: {
        url: baseUrl+ "mobileWeb/userinfo",
        method: 'GET',
    },
    banner:{
        url: baseUrl+ "mobileWeb/newHomepage3",
        method: 'GET',
    },
    listRecommend:{
        url:baseUrl + "sound/newhomepagedata",
        method: 'GET',
    },
    iocnCatalogs:{
        url:baseUrl + "mobileWeb/catalogroot",
        method: 'GET'
    },
    musicList:{
        url:baseUrl + "explore/tagalbum",
        method: 'GET'
    },
    recommend:{
        url:baseUrl + "malbum/recommand",
        method: 'GET'
    },
    hotsearch:{
        url:baseUrl + "mobileWeb/hotsearch",
        method: 'GET'
    },
    searchList:{
        url:baseUrl + "sound/getsearch",
        method: 'GET'
    },
    soundDeatil:{
        url:baseUrl + "sound/getsound",
        method: 'GET'
    },
    rankList:{
        url:baseUrl + "mobileWeb/albumList",
        method:"GET"
    },
    channelsList:{
        url:baseUrl + "/mobileWeb/channels",
        method:"GET"
   
    },
    getChannel:{
        url:baseUrl + "/mobileWeb/getChannel",
        method:"GET"
    },
    getchanneldetail:{
        url:baseUrl + "/mobileWeb/getchanneldetail",
        method:"GET"
    },
    getAdminList:{
        url:baseUrl + "/mobileWeb/channeladmin",
        method:"GET"
    },
    getcommentList:{
        url:baseUrl + "/site/getcomment",
        method:"POST"
    },
    catalogsList:{
        url:baseUrl + "/mobileWeb/catalogs",
        method:"GET"
    },
    catalogrank:{
        url:baseUrl + "/mobileWeb/catalogrank",
        method:"GET"
    },
    catalogmenu:{
        url:baseUrl + "/mobileWeb/catalogmenu",
        method:"GET"
    },
    rankDetail:{
        url:baseUrl + "/sound/soundalllist",
        method:"GET"
    },
    dramaList:{
        url:baseUrl +"/drama/rest/mobile/homepage",
        method:"GET"
    },
    updataTimeList:{
        url:baseUrl +"/drama/rest/mobile/updatetime",
        method:"GET"
    },
    dramaDetail:{
        url:baseUrl +"/drama/rest/api/getdrama",
        method:"GET"
    },
    dramaFilter:{
        url:baseUrl +"/drama/rest/mobile/filter?filters=0_0_0_0_0",
        method:"GET"
    }
    
   
    
};