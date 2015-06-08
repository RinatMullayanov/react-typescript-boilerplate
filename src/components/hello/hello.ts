/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../../../node_modules/typed-react/typed-react.d.ts" />

import React = require('react');
import TypedReact = require('typed-react');

interface HelloWorldProps {
    name: string;
}

interface HelloWorldState {
}

// So far, based on its props, each component has rendered itself once. props are immutable.
// To implement interactions, we introduce mutable state to the component. this.state is private to the component 
// and can be changed by calling this.setState(). When the state updates, the component re-renders itself.
class HelloWorldComponent extends TypedReact.Component<HelloWorldProps, HelloWorldState> {
    render() {
      // React.DOM provides convenience wrappers around React.createElement for DOM components.
      // https://facebook.github.io/react/docs/top-level-api.html#react.dom
      return React.DOM.div(null, 'Hello ', this.props.name);
    }
}

export = HelloWorldComponent;
