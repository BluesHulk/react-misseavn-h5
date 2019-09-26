import React, {
    Component
} from "react";
import { connect } from "react-redux";
import  './index.scss';
import Tab from '../../components/tab/index.js';
import Footer from '../../components/footer/index.js';
import { catalogs} from '../../store/actionCreators';
import {Link} from 'react-router-dom';
class Catalogs extends Component {
    
    render() {
        return ( 
          //   <HeaderWrapper>头部</HeaderWrapper>
          <div  id="sort">
              <Tab></Tab>
              <div className="recommend-content">
                    <div className="minBox">
                        <div className="catalogs">
                           {
                               this.catalogsItem()
                           }
                        </div>
                    </div>
              </div>
            <Footer></Footer>
          </div>
        );
    }
    componentDidMount(){
       this.props.catalogsData()
    }
    catalogsItem(){
        return this.props.catalogsList.map((item,index)=>
            <Link className="Catalog" to={index===1 ? '/drama' :'/catalogs/'+item.id} key={index} >
                <span className="catalog-icon" style={{backgroundImage:'url('+item.pic+')'}} ></span>
                <span className="catalog-title">{item.title}</span>
            </Link>
        )

    }


}

    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            catalogsList:state.iocnList
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
            catalogsData(){
                dispatch(catalogs())
            }
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Catalogs);