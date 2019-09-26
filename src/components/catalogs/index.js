import React, {
    Component
} from "react";

// import store from '../../store';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import './index.scss';
class Catalogs extends Component {
    
    render() {
        return ( 
            <div id="catalogs">
                <div className="sub-header"></div>
                <div className="sub-nav" ref="subScroll">
                    
                        <ul className="sub-catalogs" ref="tabcontent">
                            <li className="li-cat" >
                                <Link   to="/"  ></Link>
                            </li>
                        </ul>
                </div>
                <div  ref = "listview"  className="recommend-content">
                    <div >
                        <div className="catalogsPanel trans" ref="listGroup"  >
                                <div className="panel-head">
                                <div className="panel-title">
                                    <div className="callout"></div>
                                </div>
                                </div>
                                <div className="panel-body">
                                    <div className="SoundList">
                                    <div className="Thumbnail list-sound large">
                                        <div className="cover">
                                        <img className="cover-img" alt="" />
                                        </div>
                                        <Link  to="/" className="detail" >
                                            <div className="title">sss</div>
                                            <div className="username">UP主</div>
                                            <div className="statistics">
                                            <div className="item play-times">wwwwwwwwwww</div>
                                            <div className="item duration">wwwwwww</div>
                                            </div>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
       
    }

}

    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
            
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Catalogs);

