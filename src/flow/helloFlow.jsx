/* @flow */

var React = require('react');

var HelloMessage = React.createClass({
  render: function() {
    // sample for show Typecheck in the Flow
    function foo(x) {
      return x * 10;
    }

    foo(10);

    return <div>Hello {this.props.name}</div>;
  }
});

React.render(<HelloMessage name="John" />, null);
