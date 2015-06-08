/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../../../node_modules/typed-react/typed-react.d.ts" />

import React = require('react');
import TypedReact = require('typed-react');

class InputComponent extends TypedReact.Component<any, any> {
  getInitialState () {
    // executes exactly once during the lifecycle of the component and sets up the initial state of the component
    return { value: 'sample text' };
  }

 handleChange (event) {
    this.setState({value: event.target.value}); // call setState () results in a call render ()
  }

  render () {
    var value = this.state.value;
    // React.DOM provides convenience wrappers around React.createElement for DOM components.
    // https://facebook.github.io/react/docs/top-level-api.html#react.dom
    return (
      React.DOM.div(null,
        React.DOM.input({type: 'text', value: value, onChange: this.handleChange}),
        React.DOM.p(null, value)
      )
    )
  }
}

export = InputComponent;
