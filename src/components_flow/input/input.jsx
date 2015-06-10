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
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>{this.state.value}</p>
      </div>
    );
  }
});

module.exports = Input;
