import React from 'react';
import ReactDOM from 'react-dom';




import { Provider } from 'react-redux'; //用来连接store
import Router from './router'
import store from './store';
import 'lib-flexible';
import './style.scss';
const App = (
          <div>
             <Provider store={ store }>  
                 <Router/>
             </Provider>
  　　　　 </div>
   
)
ReactDOM.render(App , document.getElementById('root'));

