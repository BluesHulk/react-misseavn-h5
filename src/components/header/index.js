import React, {
    Component
} from "react";
import { connect } from "react-redux";
import store from '../../store';
// import { getAjaxInitData } from '../../store/actionCreators';
import './index.scss';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
     }
    render() {
        return ( 
           
          <header className='header'> 
                    <div className='content'>
                        <a alt="MissEvan" href="/"> 
                        <i className='logo'></i>
                        </a>
                        <div className='actions'>
                            <span className='search_input' >
                                  <span></span> 
                                  <input type="search"  />
                            </span>
                            <span className='btn_text'>取消</span>
                                <a href="/search" >
                                    <i className='search'></i> 
                                </a>
                            <i className='menu'></i>
                        </div>
                    </div>
         </header>
       
        );
    }
    componentDidMount(){
        // const action = getAjaxInitData();
        // store.dispatch(action);
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);


