import React, {
    Component
} from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import store from '../../store';
// import { getAjaxInitData } from '../../store/actionCreators';
import  './index.scss';

class Channel extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
     }
    render() {
        return ( 
            

            <div className="Panel channels">
            <div className="panel-head">
                <div className="panel-title">
                    <div className="home-panel-title channel">
                    <i></i>
                    频道
                    </div>
                </div>
                <div className="panel-nav">
                <Link className="home-panel-nav" to="/channels/all">更多</Link>
                </div>
            </div>
            <div className="panel-body">
                    {
                       this.channeInit()
                    }
            </div>
            </div>
       
        );
    }
    channeInit() {
        
        return this.props.channelList.map((items,index) =>
            <Link className="Thumbnail channel" key={items.id} to={this.hrefLink(items)} >
                <div className="cover" style={{backgroundImage:'url('+items.smallpic+')'}} >
                       <div className="follow">
                            <span>{items.follow_num}</span>
                        </div>
                </div>
                <div className="title">{items.name}</div>
            </Link>
       )
    }
    hrefLink(items){
        return `/channel/${items.id}`
    }
    
    componentDidMount(){
       
    }


}

    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            channelList:state.channelList
          }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
            
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Channel);


