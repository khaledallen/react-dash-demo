var React = require('react');
var ListItem = require('./ListItem.jsx'); // import the ListItem class that we created

var ingredients = [
  {"id":1,"text":"ham"},
  {"id":2,"text":"cheese"},
  {"id":3,"text":"potatoes"}
]; //this would normally be contained on a server

var List = React.createClass({
  render: function () {
    var listItems = ingredients.map(function(item) { //.map is a JavaScript function that creates a new array by doing the callback function on each elemnt from the array that is passed in
      return <ListItem key={item.id} ingredient={item.text} />;
    });

      return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
