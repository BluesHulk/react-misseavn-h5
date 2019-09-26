import React, {
    Component
} from "react";
// import {
//     HeaderWrapper
// } from './style.js';
import  './index.scss';
class Footer extends Component {
    render() {
        return ( 
          //   <HeaderWrapper>头部</HeaderWrapper>
          <div id="footer">
            <footer className='footer' >
                <div className='content'>
                     <button>客户端</button>
                     <i className='logo_cat'></i>
                     <button>返回顶部</button>
                </div>
                <div className='bottom'>MissEvan弹幕音频网 京ICP备:14055174号-1</div>
            </footer>
          </div> 
        );
    }


}

export default Footer;