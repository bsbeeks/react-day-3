var React = require('react');

var Contact = React.createClass({
  render: function () {
    return (
      <div>
        Contact
        <div>{this.props.children}</div>
      </div>
    );
  }
});

module.exports = Contact;