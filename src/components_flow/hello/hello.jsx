/* @flow */

var React = require('react');

class Hello extends React.Component {
  render(): any {
    return <div>Hello {this.props.name}</div>;
  }
}

module.exports = Hello;
