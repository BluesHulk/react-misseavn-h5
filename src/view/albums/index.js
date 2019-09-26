import React, {
    Component
} from "react";
import { connect } from "react-redux";
// import store from '../../store';
import  './index.scss';
import Tab from '../../components/tab/index.js';
import Footer from '../../components/footer/index.js';
import {Link} from 'react-router-dom';
import { musicList ,titleInit,innerTips} from '../../store/actionCreators';
class Albums extends Component {
    // constructor(props){
    //      super(props);
    //      this.state = store.getState();
    //  }
    render() {
        
       
        return ( 
          //   <HeaderWrapper>头部</HeaderWrapper>
           <div className="recommend-content">
                <Tab></Tab>
                <div className="minBox">
                    <div id="AlbumsTab">
                        <div  className={this.props.isShow ? "catalogs-tab show":"catalogs-tab"}>
                            <div className="tab-title">
                                <span className="btn-cancel" onClick={this.props.cancleShow} >取消</span>
                                类型选择
                            </div>
                                <div className="tags-row">
                                    <span className="tag-item all active" onClick={this.props.selectAll.bind(this)}>全部音单</span>
                                </div>
                                
                                    {
                                        this.initTitleItem()
                                    }
                                    
                        </div>
                        <div className={this.props.isShow ? "Panel trans fade":"Panel trans isFade"} >
                            <div className="panel-head">
                                <div className="panel-title">
                                    {
                                       this.initTitleOnload()
                                    }
                                </div>
                                <div className="panel-nav" >
                                <span className="album-panel-type" onClick={this.props.isShowItem} >类型</span>
                                </div>
                            </div>
                            <div className="panel-body">
                                  {
                                    this.thumbnail()
                                  }
                                <button className="btn-text open-app">更多</button>
                            </div>
                        </div>
                    </div>
                </div>
               <Footer></Footer>
           </div>
                 
              
        );
    }
    componentDidMount(){
        this.props.musicList(0);
        this.props.titleList();
        // this.props.initTips();
    }
    hrefLink(item){
        return `/album/${item.id}`
    }
    
    thumbnail(){
      
        return this.props.musicLitsInit.map((items,index) =>
        <Link className="Thumbnail album adjust" key={items.id} to={this.hrefLink(items)} >
            <div className="coverA" style={{backgroundImage:'url('+items.front_cover+')'}} >
                   <div className="sound-num">
                        <span>{items.music_count}</span>
                    </div>
            </div>
            <div className="title">{items.title}</div>
        </Link>
      )
    }
   
    rightIcon(itemRight){
        return itemRight.map((its,idx)=>
            <Link key={idx} className="itemAlbums" seach={its[1]} data-id={its[0]} to={`/albums/${its[0]}`} onClick={this.props.changeList}>
                {its[1]}
            </Link> 
        )
    }

    initTitleItem(){
        const baseData = this.props.titleItem;
      
        return Object.keys(baseData).map((items,index) =>
        
                <div className="tags-item" key={index} >
                    <div className="leftIcon">
                        <i></i>
                        {items}
                    </div>
                    <div className="rightIcon" >
                        {
                        this.rightIcon(baseData[items])
                        }
                    </div>
                    
                </div>
        )

     
    }

    initTitleOnload(){
        var tips = localStorage.getItem("tips")
       if(this.props.match.params.id === localStorage.getItem("id")){
           return  <div className="callout">{tips}</div>
       }else{
        return  <div className="callout">{ this.props.tipsInit}</div>
       }
    }


}

    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            musicLitsInit:state.musicList,
            isShow:state.isShow,
            titleItem:state.titleList,
            tipsInit:state.tips
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
            musicList(){
                const id = this.match.params.id;
                if(id){
                    dispatch(musicList(id))
                }else{
                    dispatch(musicList(0))
                }
            },
            isShowItem(){
                const action = {
                    type:"init_isshow",
                    isShow:true
                }
                dispatch(action)
            },
            cancleShow(){
                const action = {
                    type:"cancle_isshow",
                    isShow:false
                }
                dispatch(action)
            },
            titleList(){
                    dispatch(titleInit())
            },
            initTips(){
                //console.log(this)
                dispatch(innerTips())
            },
            changeList(e){
                const action = {
                    type:"cancle_isshow",
                    isShow:false
                }
                dispatch(action)
                const id = e.target.getAttribute("data-id");
                const value =  e.target.innerHTML;
                dispatch(musicList(id))
                dispatch(innerTips(value))
                localStorage.setItem("tips",value)
                localStorage.setItem("id",id)
            },
            selectAll(e){
                const action = {
                    type:"cancle_isshow",
                    isShow:false
                }
                dispatch(action)
                const value =  e.target.innerHTML;
                dispatch(innerTips(value))
                dispatch(musicList(0))
                this.props.history.replace("/albums")
            }
            
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Albums);