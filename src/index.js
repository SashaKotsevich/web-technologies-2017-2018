import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchPart from './components/SearchPart';
import TabsPart from './components/TabsPart';
import FollowersPart from './components/Followers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {HashRouter as Router, Route} from 'react-router-dom'; 
import Menu from './components/Menu'
const store =createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    
    <SearchPart />
   
  </Provider>,
    document.getElementById("root")
)
ReactDOM.render(
  <Provider store={store}>
   <Router>
     <div>
    <Route path='/' component={Menu} />
    <Route exact path="/" component={TabsPart}/>
    <Route exact path="/followers" component={FollowersPart}/>
    </div>

   </Router>
    
  </Provider>,
    document.getElementById("tabs")
)