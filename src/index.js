import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchPart from './components/SearchPart';
import TabsPart from './components/TabsPart';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

const store =createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
        <div className="main_window">
        <SearchPart />
        <TabsPart/>
        </div>
  </Provider>,
    document.getElementById("root")
)
