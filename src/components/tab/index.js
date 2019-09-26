import React, {
    Component
} from "react";
import { NavLink} from 'react-router-dom';
import store from '../../store';
import { connect } from "react-redux";
import './index.scss';
class Tab extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
     }
    render() {
        return ( 
            <div>
                <ul className='tab'>
                    <li  className='tab_item'><NavLink  className='tab_link' activeClassName='tab_link_active' to="/albums">音单</NavLink></li>
                    <li  className='tab_item'><NavLink  className='tab_link' activeClassName='tab_link_active' to="/recommend">推荐</NavLink></li>
                    <li  className='tab_item'><NavLink  className='tab_link' activeClassName='tab_link_active' to="/catalogs">分类</NavLink></li>
                </ul>
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

export default connect(mapStateToProps,mapDispatchToProps)(Tab);

