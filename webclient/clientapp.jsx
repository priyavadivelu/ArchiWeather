var React = require('react');
var ReactDOM = require('react-dom');
import { Header,Icon, Button, Container} from 'semantic-ui-react';
var {hashHistory, Route, Router, IndexRoute} = require('react-router');
var NavBar = require('./components/navbar/NavBar.jsx');
var Home = require('./components/container.jsx');

ReactDOM.render(
  <Router history={hashHistory}>
          <Route path="/" component={Home}/>
  </Router>,document.getElementById('mountapp'));
