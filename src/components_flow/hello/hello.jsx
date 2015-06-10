/* @flow */

var React = require('react');

var Hello = React.createClass({
    render: function(): any {
        return <div>Hello {this.props.name}</div>;
    }
});

module.exports = Hello;
