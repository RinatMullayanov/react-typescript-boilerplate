/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../../../node_modules/typed-react/typed-react.d.ts" />

import React = require('react');
import TypedReact = require('typed-react');

interface HelloWorldProps {
    name: string;
}

interface HelloWorldState {
}

class HelloWorldComponent extends TypedReact.Component<HelloWorldProps, HelloWorldState> {
    render() {
        return React.createElement('div', null, 'Hello ', this.props.name);
    }
}

export = HelloWorldComponent;