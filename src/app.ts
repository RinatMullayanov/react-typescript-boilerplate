/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../node_modules/typed-react/typed-react.d.ts" />

import React = require("react");
import TypedReact = require("typed-react");

export interface HelloWorldProps {
    name: string;
}

interface HelloWorldState {
}

class HelloWorld extends TypedReact.Component<HelloWorldProps, HelloWorldState> {
    render() {
        return React.createElement("div", null, "Hello ", this.props.name);
    }
}

var hello = TypedReact.createClass(HelloWorld);

React.render(
    React.createElement(hello, {name: "World!!!"}),
    document.getElementById('react-container')
);