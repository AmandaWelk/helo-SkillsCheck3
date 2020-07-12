import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import {withRouter} from 'react-router-dom';


const App = props => {
  return (
    <div className="app">
      {routes}
      {props.location.pathname !== '/'
      ? 
      <Nav/>
      :
      null}
    </div>
  );
}

export default withRouter(App);
