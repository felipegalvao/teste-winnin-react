var React = require('react');
var ReactDOM = require('react-dom');

import MainApp from './components/MainApp.jsx';

// App css
require('style-loader!css-loader!sass-loader!./styles/app.scss');

// Define the subreddit to be used
var subReddit = "reactjs";

ReactDOM.render(
  <MainApp subReddit={subReddit} />,
  document.getElementById('app')
);
