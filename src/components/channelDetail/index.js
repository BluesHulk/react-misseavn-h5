import React, {
    Component
} from "react";

// import store from '../../store';
import { connect } from "react-redux";
import './index.scss';
class ChannelDetail extends Component {
    
    render() {
        return ( 
            <div>
              ChannelDetail详情
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

export default connect(mapStateToProps,mapDispatchToProps)(ChannelDetail);

