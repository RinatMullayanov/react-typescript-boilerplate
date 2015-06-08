/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../node_modules/typed-react/typed-react.d.ts" />

import React = require('react');
import TypedReact = require('typed-react');

import HelloWorldComponent = require('../src/components/hello/hello');
import InputComponent = require('../src/components/input/input');

// combine several components
class App extends TypedReact.Component<any, any> {
    render() {
      var hello = TypedReact.createClass(HelloWorldComponent);
      var customComponent = TypedReact.createClass(InputComponent);
      
    return (
        React.createElement('div', null, 
          React.createElement(hello, {name: 'World!!!'}), 
          React.createElement(customComponent, null)
        )
      )
    }
}

var app = TypedReact.createClass(App);

React.render(
    React.createElement(app, null),
    document.getElementById('react-container')
);