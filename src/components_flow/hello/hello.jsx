/* @flow */

var React = require('react');
//http://flowtype.org/docs/objects.html#reusable-object-types
type HelloProps = {
  name: string
};

//http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html
class Hello extends React.Component {
  static propTypes: { name: string };
  static defaultProps: { name: string };

  // https://github.com/facebook/flow/issues/398, and can use any type
  constructor(props: HelloProps) {
     super(props);
  }

  render(): any {
    return <div>Hello {this.props.name}</div>;
  }
}


module.exports = Hello;
