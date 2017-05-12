var React = require('react');
var Widget = require('./Widget.jsx')

var Dashboard = React.createClass({
  render: function(){

    var backgroundStyle = {}
    var headingBackgroundStyle = {};
    var headingStyle = {
      height: 200
    };
    var panelBodyStyle = {};

    if (this.props.backgroundColor) {
      backgroundStyle.backgroundColor = this.props.backgroundColor;
      backgroundStyle.backgroundImage = "none";
    }

    if (this.props.backgroundImage) {
      backgroundStyle.backgroundImage = "url(" + this.props.backgroundImage + ")";
      headingBackgroundStyle.backgroundColor = "rgba(0,0,0,.0)";
      headingBackgroundStyle.backgroundImage = "none";
      headingStyle.color = "#FFFFFF";
      panelBodyStyle.backgroundColor = "rgba(255,255,255,.5)";
    }

    var createWidget = function(item){
      return <div key={item.id} className="col-sm-4"><Widget metric={item.metric} title={item.title} /></div>;
    };

    return (
      <div className="dashboard panel panel-default" style={backgroundStyle} id={this.props.id}>
        <div className="panel-heading" style={headingBackgroundStyle}><h1 style={headingStyle}>{this.props.dashTitle}</h1></div>
          <div className="panel-body" style={panelBodyStyle}>
            {this.props.item.map(createWidget)}
          </div>
      </div>
    );
  }
});

module.exports = Dashboard;
