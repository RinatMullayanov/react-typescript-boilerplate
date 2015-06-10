/* @flow */

var React = require('react');

var Input = React.createClass({

  getInitialState: function(): any {
    return {value: 'Hello!'};
  },

  handleChange: function(event: any): any {
    this.setState({value: event.target.value});
  },

  render: function(): any {
    var value = this.state.value;
    return <input type="text" value={value} onChange={this.handleChange} />;
  }
});

module.exports = Input;
