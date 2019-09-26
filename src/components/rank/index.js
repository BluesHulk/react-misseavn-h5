import React, {
    Component
} from "react";

// import store from '../../store';
import { rankList } from '../../store/actionCreators';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import './index.scss';
class Rank extends Component {
    
    render() {
        return ( 
            <div id="rank">
                <div className="sub-header">排行榜</div>
                <div ref = "scroll" className="recommend-content" >
                    <div id="RankPage">
                        {
                            this.renderComponentList()
                        }
                    </div>
                </div>
            </div>
        );
    }
    renderComponentList(){
        return(
            this.props.rankList.map((item,index)=>
            <Link className="rank-part" key={index}  to={this.hrefLink(item)}>
                        <div className="Thumbnail album">
                                <div className="cover"  style={{backgroundImage:'url('+this.coverImage(item)+')'}}>
                                        <div className="sound-num">
                                            <span>{ item.album.music_count }</span>
                                        </div>
                                </div>
                        </div>
                        <div className="rank-list">
                                {
                                    this.childList(item.sounds)
                                }
                        </div>

                       
            </Link>)   
        )
    }
    childList(itm){
       return(
            itm.map((it)=>
                    <span className="rank-item" key ={it.id}>{it.soundstr}</span>
            )
       ) 
    }
    hrefLink(item){
        return `/album/${item.album.id}`
    }
    coverImage(item){
        return `//static.missevan.com/coversmini/${item.album.cover_image}`
    }
    componentDidMount(){
        this.props.getRankInit()
    }

}

    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            rankList:state.rankList
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
            getRankInit(){
                dispatch(rankList())
            }
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Rank);

