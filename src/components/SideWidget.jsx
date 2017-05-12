var React = require('react');

var SideWidget = React.createClass({
  render: function(){
    return (
      <div className="panel panel-default" id={"widget-key-" + this.props.id}>
        <div className="panel-heading">
          <h4>{this.props.title}</h4>
          <h2>{this.props.metric}</h2>
        </div>
        <div className="panel-body"></div>
      </div>
    );
  }
});

module.exports = SideWidget;
