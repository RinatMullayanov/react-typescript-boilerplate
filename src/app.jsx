/* @flow */
var React = require('react');
var Hello = require('../src/components_flow/hello/hello');

//var Input = require('../src/components_flow/input/input');
//React.renderComponent(<Hello name="World" />, document.getElementById('react-container'));

React.render(
  <Hello name="World"/>,
  document.getElementById('react-container'));
