var React = require('react'); //node syntax to import the React module
var ListItem = React.createClass({  //this is how your create your own React (object) class
  render: function() {  // Property named render is a function that returns
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    ); //this assumes that there is a property called ingredient that is passed down into this component
  }
});

module.exports = ListItem;
