import React, {
    Component
} from "react";
import { connect } from "react-redux";
// import styles from  './index.scss';
import   './index.scss';
import Tab from '../../components/tab';
import Swiper from '../../components/swiper';
import Panel from '../../components/panel';
import Channel from '../../components/channel';
import PanelList from '../../components/recommendList';
import Footer from '../../components/footer/index.js';
import { getBannerInit } from '../../store/actionCreators';
// import ReactSwiper from 'reactjs-swiper';
// const swiperOptions = {
//     preloadImages: true,
//     autoplay: 500,
//     autoplayDisableOnInteraction: false
//   };
class Recommend extends Component {
    
    render() {
        return ( 
          //   <HeaderWrapper>头部</HeaderWrapper>
          <div id="recommend">
              <Tab></Tab>
              <div className='recommend'>
                <Swiper list={this.props.bannerList}></Swiper>
                {/* <div className="common-swiper">
                    <ReactSwiper swiperOptions={swiperOptions} showPagination items={this.props.bannerList} className="swiper-example" />
                </div> */}
                <Panel></Panel>
                <Channel></Channel>
                <PanelList></PanelList>
              </div>
              <Footer></Footer>
              
          </div>
        
        );
    }
    commponentWillMount(){
        
    }
    componentDidMount(){
        //这是图片轮播的数据接口
        this.props.getBannerInit();
      
    }


}

    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            bannerList:state.bannerList 
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
            getBannerInit(){
                dispatch(getBannerInit())
            },
           

        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Recommend);