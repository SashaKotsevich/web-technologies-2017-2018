import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchPart from './components/SearchPart';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import TabsReducer from './reducer';
import {HashRouter as Router, Route} from 'react-router-dom'; 
import TabsMenu from './components/Tabs/TabsMenu';
import BasicTab from './components/Tabs/BasicTabComponent';
import EducationTab from './components/Tabs/EducationTabComponent';
import ContactsTab from './components/Tabs/ContactsTabComponent';
import FollowersTab from './components/Tabs/FollowersTabComponent';
import RepositoriesTab from './components/Tabs/RepositoriesTabComponent';
import OrgsTab from './components/Tabs/OrgsTabComponent';
import mySaga from './sagas'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()
const store =createStore(TabsReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
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
    <Route path='/' component={TabsMenu} />
    <Route exact path="/" component={BasicTab}/>
    <Route exact path="/education" component={EducationTab}/>
    <Route exact path="/contacts" component={ContactsTab}/>
    <Route exact path="/followers" component={FollowersTab}/>
    <Route exact path="/repos" component={RepositoriesTab}/>
    <Route exact path="/orgs" component={OrgsTab}/>
   
    </div>

   </Router>
    
  </Provider>,
    document.getElementById("tabs")
)