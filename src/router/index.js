import React from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';


import Header from '../components/header';
import SoundDetail from '../components/soundDetail';
import ChannelDetail from '../components/channelDetail';
import CataLogsList from '../components/catalogs';
import DramaList from '../components/drama';
import AlbumList from '../components/albumList';
import ChannelList from '../components/channelList';
import Rank from '../components/rank';
import Recommend from '../view/recommend';
import Catalogs from '../view/catalogs';
import Albums from '../view/albums';

const Router = ()=>{
       return  <div>
            <BrowserRouter>
              <div>
              <Header/>

              <Switch>
                <Route path="/recommend"  component={ Recommend }></Route>
                <Route path="/catalogs" exact component={ Catalogs } ></Route>
                <Route path="/albums" exact component={ Albums } ></Route>
                <Route path="/albums/:id" exact component={ Albums } ></Route>
                <Route path="/sound/:id" exact component={ SoundDetail } ></Route>
                <Route path="/channel/:id" exact component={ ChannelDetail } ></Route>
                <Route path="/album/:id" exact component={ AlbumList } ></Route>
                <Route path="/drama" exact component={ DramaList } ></Route>
                <Route path="/catalogs/:id" exact component={ CataLogsList } ></Route>
                <Route path="/channels/:user" exact component={ ChannelList } ></Route>
                <Route path="/rank" exact component={ Rank } ></Route>
                <Redirect from ="/" exact to="/recommend"/>
             </Switch>  
              </div>
            </BrowserRouter>
　　　　 </div>
}


export default Router