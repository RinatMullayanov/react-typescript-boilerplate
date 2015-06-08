/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../../../node_modules/typed-react/typed-react.d.ts" />

import React = require('react');
import TypedReact = require('typed-react');

class InputComponent extends TypedReact.Component<any, any> {
  getInitialState () {
    return { value: 'sample text' };
  }
  
 handleChange (event) {
    this.setState({value: event.target.value});
  }
  
  render () {
    var value = this.state.value;
    return (
      React.createElement('div', null, 
        React.createElement('input', {type: 'text', value: value, onChange: this.handleChange}), 
        React.createElement('p', null, value)
      )
    )
  }
}

export = InputComponent;