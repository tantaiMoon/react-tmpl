import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import reducers from './reducers';
import './config';
import './index.css';

import Login from './pages/login/login';
import Register from './pages/register/Register';
import AuthRoute from './component/authroute/AuthRoute';
import BossInfo from './pages/boss/BossInfo';
import GeniusInfo from './pages/genius/GeniusInfo';
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
));

export default class App extends React.Component {
  render() {
    return (
    	<div>
    		<Provider store={ store }>
    	    <BrowserRouter>
    	      <div>
    	      	<AuthRoute></AuthRoute>
    	       	<Route path='/bossinfo' component={ BossInfo }></Route>
    	       	<Route path='/geniusinfo' component={ GeniusInfo }></Route>
    	       	<Route path='/login' component={ Login }></Route>
    	       	<Route path='/register' component={ Register }></Route>
    	      </div>
    	    </BrowserRouter>
    	  </Provider>
    	</div>
  	);
  }
}

