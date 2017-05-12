var React = require('react');
var Widget = require('./Widget.jsx')

var HeadDashboard = React.createClass({
  render: function(){

    var marginStyle = {
      marginTop: 50
    };

    if (this.props.backgroundColor) {
      backgroundStyle.backgroundColor = this.props.backgroundColor;
      backgroundStyle.backgroundImage = "none";
    }

    var createWidget = function(item){
      return <div key={item.id} className="col-sm-4"><div className="panel panel-default"><Widget key={item.id} metric={item.metric} title={item.title} color={item.color}/></div></div>;
    };

    return (
      <div style={marginStyle}>
          {this.props.item.map(createWidget)}
      </div>
    );
  }
});

module.exports = HeadDashboard;
