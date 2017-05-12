var React = require('react');
var SideWidget = require('./SideWidget.jsx')

var SideDashboard = React.createClass({
  render: function(){

    var marginStyle = {
      marginTop: 50
    };

    if (this.props.backgroundColor) {
      backgroundStyle.backgroundColor = this.props.backgroundColor;
      backgroundStyle.backgroundImage = "none";
    }

    var createWidget = function(item){
      return <SideWidget key={item.id} metric={item.metric} title={item.title} color={item.color}/>;
    };

    return (
      <div style={marginStyle}>
          {this.props.item.map(createWidget)}
      </div>
    );
  }
});

module.exports = SideDashboard;
