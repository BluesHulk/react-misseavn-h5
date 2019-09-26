import React, {
    Component
} from "react";
import {Link} from 'react-router-dom';
// import store from '../../store';
import { connect } from "react-redux";
import { listOfAlbum } from '../../store/actionCreators';
import './index.scss';
class AlbumList extends Component {
    
    render() {
        return ( 
            <div id="home">
                    <div id="AlbumPage">
                         {
                            this.albumWall()
                         }

                         <div ref = "scroll" className="recommend-content">
                            <div id="albumList">
                               {
                                   this.thumbnailList()
                               }
                            </div>
                        </div>



                    </div>

            </div>
        );
    }
    componentDidMount(){
       this.props.ListDetail()
    }
    albumWall(){
        const albumDetail = this.props.albumDetail;
        return (
            <div className="Wall album-wall"  key={albumDetail.id}>
                <div className="wall-body">
                    <img className="album-avatar" alt="" src={albumDetail.front_cover} />
                    <div className="album-detail">
                        <span className="album-title">{albumDetail.title}</span>
                        <Link  to="'/'+user_id+'/sound'" className="Thumbnail simple-user album-user">
                            <img className="avatar" alt=""  src={albumDetail.cover_image}/>
                            <span className="name">{albumDetail.username}</span>
                        </Link>
                    </div>
                </div>
                <div className="wall-warp blur" style={{backgroundImage:'url('+albumDetail.front_cover+')'}}></div>
            </div>
        )
    }
    thumbnailList(){
        return this.props.soundList.map((item,index)=>
            <div className="Thumbnail list-sound" key={index}>
                <div className="cover">
                    <img className="cover-img" src={item.front_cover} alt=""/>
                </div>
                <Link className="detail" to={this.herfLink(item)}>
                    <div className="title">{item.soundstr}</div>
                    <div className="statistics">
                        <div className="item play-times">{item.view_count_formatted}</div>
                        <div className="item duration">{this.format(item.duration)}</div>
                    </div>
                </Link>
            </div>
        )
    }
    herfLink(item){
        return `/sound/${item.id}`
    }
    _pad(num, n = 2) {  //格式化时间分钟
        let len = num.toString().length
        while (len < n) {
          num = '0' + num
          len++
        }
        return num
      }
    format(interval) {
        interval = interval | 0
        const minute = interval / 60 / 1000 | 0
        const second = this._pad(interval % 60)
        return `${minute}:${second}`
    }
}

    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            albumDetail:state.albumDetail,
            soundList:state.soundList 
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
            ListDetail(){
                const id = this.match.params.id;
                dispatch(listOfAlbum(id))
            }
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(AlbumList);

