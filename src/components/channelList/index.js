import React, {
    Component
} from "react";
import {Link,NavLink} from 'react-router-dom';
// import store from '../../store';
import { connect } from "react-redux";
import { channelsList } from '../../store/actionCreators';
import './index.scss';
const url=[
    { href:'/channels/all',name:"全部",id:2},
    { href:'/channels/sound',name:"M音",id:0},
    { href:'/channels/ring',name:"铃声",id:1}
]
class ChannelList extends Component {
    
    render() {
        return ( 
            <div id="channels">
                    <div className="sub-header">频道</div>
                    <div ref = "scroll" className="recommend-content">
                        <ul className='tab'>
                           {
                             this.tabRender()   
                            }
                        </ul>  
                        <div id="all">
                            {
                                this.eleDataRender()
                            }
                        </div>
                    </div>
            </div>
        );
    }
    tabRender(){
        return (
            url.map((item)=>
              <li  className='tab_item'  key={item.id}><NavLink  className='tab_link' activeClassName='tab_link_active' to={item.href}>{item.name}</NavLink></li>
            )
        )
    }
    componentWillUpdate(nextProps){
       
    }
    componentDidUpdate(prevProps){
        console.log(prevProps)
        const type =  this.props.match.params.user;
        var typeNum = 2;
        // console.log(this.props)
        if(type === "all"){
            typeNum = 2
        }else if(type === "sound"){
            typeNum = 0
        }else if(type === "ring"){
            typeNum = 1
        }
        if (this.props.location !== prevProps.location) {
            console.log( "路由变化")
            this.props.channleInit(typeNum)
          }
    }
 
    componentDidMount(){
        const type =  this.props.match.params.user;
        var typeNum = 2;
        if(type === "all"){
            typeNum = 2
        }else if(type === "sound"){
            typeNum = 0
        }else if(type === "ring"){
            typeNum = 1
        }
        this.props.channleInit(typeNum)
    }
    eleDataRender(){
        return(
            this.props.channelListData.map((item)=>
                <Link  to={this.linkHref(item)} key={item.id} className="Thumbnail channel large">
                        <div className="cover" style= {{backgroundImage:'url('+this.coverImage(item)+')'}} >
                        <div className="follow"><span>{item.follow_num}</span></div>
                        </div>
                        <div className="title">{item.name}</div>
                </Link>
            )
        )
    }
    linkHref(item){
        return `/channel/${item.id}/sounds`
    }
    coverImage(item){
            return item.smallpic
    }

}

    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            channelListData:state.channelsData
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
            channleInit(type){
              
               dispatch(channelsList(type)) 
            }
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(ChannelList);

