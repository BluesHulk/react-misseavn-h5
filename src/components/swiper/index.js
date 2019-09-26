import React, {
    Component
} from "react";
import { connect } from "react-redux";
// import { getBannerInit } from '../../store/actionCreators';
import Swiper from 'swiper/dist/js/swiper.js'
import {withRouter} from 'react-router-dom';
import 'swiper/dist/css/swiper.min.css'
// import * as actionCreator from './store/actionCreators';
class SwiperMobile extends Component {
   
    render() {
        return (
        <div >
            <div className="swiper-container"  ref="lun">
                <div className="swiper-wrapper">
                    {
                      this.bannerInit()
                    }
                </div>
                <div className='swiper-pagination'></div>
            </div>
        </div>
        ); 
    }
    commponentWillMount(){
      
    }
    bannerInit() {
        
            return this.props.list.map((item,index) =>
            <div  className="swiper-slide" key={index} data-id={index} ><img alt="" src={item.pic}/></div>
           )
    }
    
    componentDidMount() {
        //  this.props.getBannerInit();
        // const action = getBannerInit();
        // store.dispatch(action);
        setTimeout(function(){
            new Swiper('.swiper-container', {
                observer:true,
                autoplay: {   //滑动后继续播放（不写官方默认暂停）
                    disableOnInteraction: false,
                },
                loop: true,
                loopAdditionalSlides :0,
                pagination : {
                    el: '.swiper-pagination'
                }
            });
        },3000)
      

        
        

    }
    commponentWillReceiveProps(nextProps,nextState){
    }
    shouldCommponentUpdate(nextProps,nextState){
    }
}


const mapState = (state) => { //遍历所有的store获取
    return {
    //   bannerList:state.bannerList
    }
}

const mapDispatch = (dispatch) => ({
    // getBannerInit(){
    //   dispatch(getBannerInit())
    // }
})

export default connect(mapState,mapDispatch)(withRouter(SwiperMobile));