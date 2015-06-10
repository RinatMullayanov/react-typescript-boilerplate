/* @flow */
var React = require('react');
var Hello = require('../src/components_flow/hello/hello');

var Input = require('../src/components_flow/input/input');

React.render(
  <div>
    <Hello name="World" />
    <Input/>
  </div>,
  document.getElementById('react-container'));
