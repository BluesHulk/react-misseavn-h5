import React, {
    Component
} from "react";
import { connect } from "react-redux";
import './index.scss';

import { percent_um } from '../../../../store/actionCreators';
import  { prefixStyle } from '../../../../common/js/dom.js';
const transform = prefixStyle('transform')
const btnWidth = 16;

class ProgressBar extends Component {
    render(){
        return(
            <div className="progress-bar" ref="progressBar" onClick={ this.progressClick.bind(this) }>
                <div className="bar-inner">
                <div className="progress" ref="progress"></div>
                <div className="progress-btn-wrapper" ref="progressBtn"
                       onTouchStart={ this.progressTouchStart.bind(this)}
                       onTouchMove={  this.progressTouchMove.bind(this) }
                       onTouchEnd={  this.progressTouchEnd.bind(this) }
                 > 
                    <div className="progress-btn"></div>
                </div>
                </div>
            </div>
        ) 
    }
    progressTouchStart(e){
        console.log(this)
        e.preventDefault();
        this.props.touch.inititaed = true ;
        this.props.touch.startX = e.touches[0].pageX;
        this.props.touch.left = this.refs.progress.clientWidth;
     }
     progressTouchMove(e){
        e.preventDefault();
         if(!this.props.touch.inititaed){
            return
         }
         const deltaX = e.touches[0].pageX - this.props.touch.startX;
         const offsetWidth = Math.min(this.refs.progressBar.clientWidth-btnWidth,Math.max(0,this.props.touch.left+deltaX))
         console.log(offsetWidth)
         this._offset(offsetWidth)
         this.props._triggerPecent(this)
     }
     progressTouchEnd(){
         this.props.touch.inititaed = false
     }
     progressClick(e){
         const rect = this.refs.progressBar.getBoundingClientRect()
         const offsetWidth = e.pageX - rect.left
         this._offset(offsetWidth)
      // this._offset(e.offsetX)
        this.props._triggerPecent(this);
     }
     _offset(offsetWidth){
         this.refs.progress.style.width = `${offsetWidth}px`
         this.refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px,0,0)`
     }
     
}
const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
    return {
        touch:{},
    }
}
const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
    return {
        _triggerPecent(that){
            const BarMaxWidth =  that.refs.progressBar.clientWidth - btnWidth;
            var percent = that.refs.progress.clientWidth/BarMaxWidth;
            // this.$emit("progressPecent",percent)
            if(percent>1){
                percent=1
            }
            console.log("progressPecent",percent)
            dispatch(percent_um(percent))
          }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProgressBar);


   



