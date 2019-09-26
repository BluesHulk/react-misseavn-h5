import React, {
    Component
} from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { listRecommend } from '../../store/actionCreators';
import  './index.scss';

class PanelList extends Component {
   
    render() {
        return this.props.recommendList.map((item,index) =>
            <div className="Panel sounds" key={index}>
                <div className="panel-head">
                    <div className="panel-title">
                        <div className="home-panel-title sound">
                        <i className={this.iconName(item)}></i>
                          {item.title}
                        </div>
                    </div>
                    <div className="panel-nav">
                      <Link className="home-panel-nav" to={this.moreLink(item)}>更多</Link>
                    </div>
                </div>
                <div className="panel-body">
                
                  {this.sentimentInit(item)}
                    
                </div>
            </div>
       )
    }
    sentimentInit(item) {
        
        return item.objects_point.map((items,index) =>
             <Link className="Thumbnail sound"  key={index} to={this.hrefLink(items)}>
                    <div className="cover" style={{backgroundImage:'url('+this.miniImg(items)+')'}}></div>
                    <div className="title">{items.soundstr}</div>
                    <div className="detail">
                        <span className="item play-times">{items.view_count}</span><span className="item comments">{items.comment_count}</span>
                    </div>
            </Link>
        )
    }
    moreLink(item){
        return `/catalogs/${item.id}`
    }
    hrefLink(item){
        return `/sound/${item.id}`
    }
    miniImg(item){
        return `//static.missevan.com/coversmini/${item.cover_image}`
    }
    iconName(item){
                return `catalog-icon-${item.id}`
    }
    componentDidMount(){
        this.props.getRecommendInit()
    }


}

    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            recommendList:state.recommendList
          }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
            getRecommendInit(){
                dispatch(listRecommend())
            }
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(PanelList);


