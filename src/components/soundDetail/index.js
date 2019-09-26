import React, {
    Component
} from "react";
import ProgressBar from './child/progress/index.js'
// import store from '../../store';
import { SoundOfDetail , pauseStart ,currentTime} from '../../store/actionCreators';
import { connect } from "react-redux";
import './index.scss';

class SoundDetail extends Component {
    
    render() {
        return ( 
            <div id="detail">
                <div id="SoundPage">
                    {
                        this.headerDetail()
                    }
                    <div className="sound-action-container">
                        <ul className="sound-action">
                            <li className="share"><i></i><span>分享</span></li>
                            <li className="like"><i></i><span>喜欢</span></li>
                            <li className="download"><i></i><span>下载</span></li>
                        </ul>
                    </div>
                
                </div>
                <audio ref="audio" src={this.audioSrc()} onCanPlay={ ()=>this.ready}   onError={()=>this.error } onTimeUpdate={()=>this.props.updataTime}></audio>
        </div>
        );
    }
    componentDidUpdate(){
       if(this.props.soundItem){
         this.addEventListeners()

       }

    }
    componentDidMount(){
       this.props.soundInit();
    //    this.addEventListeners()
    }
    audioSrc(){
        const item = this.props.soundItem;
        return `https://static.missevan.com/${item.soundurl_64}`
    }
    cover_image(item){
        return `//static.missevan.com/mosaic/${item.cover_image}`
    }
  
    headerDetail(){
        const { soundItem ,currentTime,statePause} = this.props
        return (
            <div id="SoundPlayer">
                <div className="cover" style={{backgroundImage:'url('+this.cover_image(soundItem)+')'}}>
                    <div className="record-disk">
                    <img  src={soundItem.front_cover}  alt=""/>
                    </div>
                </div>
                <div className="danmaku-stage-wrap"><div className="danmaku"></div></div>
                <div className="controller">
                <div  className={statePause ? 'btn-icon btn-pause' : 'btn-icon btn-play'} onClick={()=>this.changeStartState(!statePause)}></div>
                </div>
                <div className="progress-bar">
                    <ProgressBar ></ProgressBar>
                </div>
                <div className="sound-time">
                <span className="played-time">{this.format2(currentTime)}</span>
                <span className="duration">{this.format(soundItem.duration)}</span>
                </div>
                
            </div>
        )
    }
    _pad(num, n = 2) {  //格式化时间分钟
        let len = num.toString().length;
        if (len < n) {
            num = '0' + num
            len++
        }
        return num
    }
    format(interval) {
        interval = interval | 0
        const minute =  this._pad(parseInt((interval % (1000 * 60 * 60)) / (1000 * 60))) | 0
        const second = this._pad(parseInt((interval % (1000 * 60)) / 1000)) 
        return `${minute}:${second}`
    }
    format2(interval) {
        interval = interval | 0
        const minute = interval / 60 | 0
        const second = this._pad(interval % 60)
        return `${minute}:${second}`
      }
    error(){
        this.props.songReady = true
    }
   
    ready(){
        this.props.songReady = true
    }
    changeStartState(val){
        this.props.initStart(val)
        const audio = this.refs.audio;
        val ? audio.play() : audio.pause()
    }
    _currentTime() {  
       // this.timeNow = parseInt(this.refs.audio.currentTime)
         // console.log(this.duration,this.timeNow)  
        //this.percent =  this.currentTime / this._durationTime(); 
    } 
    _durationTime() {  
        // return  parseInt(this.refs.audio.duration) ;
    }
    onProgressChange(){
        const audio = this.refs.audio;
        const percent = this.props.percent;
        audio.currentTime = audio.duration * percent ;
    }
    addEventListeners() {  
        console.log(this.refs.audio)
        this.refs.audio.addEventListener('timeupdate', this._currentTime)
        this.refs.audio.addEventListener('canplay', this._durationTime)  
    }
    
}

    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            soundItem:state.soundDetail,
            currentTime:state.currentTime,
            statePause:state.startOrPause,
            songReady:false,
            percent:state.percent
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
            soundInit(){
            const id = this.match.params.id
                dispatch(SoundOfDetail(id))
            },
            initStart(val){
                dispatch(pauseStart(val))
            },
            updataTime(e){
                console.log(e.target.currentTime)
                dispatch(currentTime(e.target.currentTime))
             }
            
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(SoundDetail);

