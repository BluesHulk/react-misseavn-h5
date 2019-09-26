import React, {
    Component
} from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import store from '../../store';
// import { getAjaxInitData } from '../../store/actionCreators';
import  './index.scss';

class Panel extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
     }
    render() {
        return ( 
            <div className='Panel'>
                <div className="panel-head">
                    <div className="panel-title">
                        <div className="home-panel-title sound">
                        <i></i>
                        人气 M 音
                        </div>
                    </div>
                    <div className="panel-nav">
                    <Link className="home-panel-nav" to="/rank"  >排行榜</Link>
                    </div>
                </div>
                <div className="panel-body">
                    {
                       this.sentimentInit()
                    }
                </div>
           </div>
       
        );
    }
    sentimentInit() {
        
        return this.props.sentimentList.map((items,index) =>
            <Link className="Thumbnail sound" key={index} to={this.hrefLink(items)} >
                <div className="cover" style={{backgroundImage:'url('+items.front_cover+')'}} ></div>
                <div className="title">{items.soundstr}</div>
                <div className="detail">
                    <span className="item play-times">{items.view_count}</span><span className="item comments">{items.comment_count}</span>
                </div>
            </Link>
       )
    }
    hrefLink(item){
        return `/sound/${item.id}`
    }
    miniImg(item){
        return `//static.missevan.com/coversmini/${item.front_cover}`
    }
    componentDidMount(){
       
    }


}

    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            sentimentList:state.sentimentList
          }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
            
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Panel);


