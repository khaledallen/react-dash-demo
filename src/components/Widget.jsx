var React = require('react');

var Widget = React.createClass({
  render: function(){
    return (
      <div className="panel-body">
        <h2>{this.props.metric}</h2>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
});

module.exports = Widget;
