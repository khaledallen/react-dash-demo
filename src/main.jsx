var React = require('react');
var ReactDOM = require('react-dom'); //react-dom works to show things on the screen
var HeadDashboard = require('./components/HeadDashboard.jsx');
var Dashboard = require('./components/Dashboard.jsx');
var SideDashboard = require('./components/SideDashboard.jsx');

ReactDOM.render(<HeadDashboard id="1" item={[
  {"id":1,"metric":"20","title":"New followers added this month"},
  {"id":2,"metric":"$3050","title":"Average Monthly Income"},
  {"id":3,"metric":"$25000%","title":"Yearly Income Goal"}
]} />, document.getElementById('header'));  //this tells the DOM to insert the List component into the DOM element ID called ingredients

ReactDOM.render(<Dashboard id="1" dashTitle="Milky Way" backgroundImage="images/stars.jpeg" item={[
  {"id":1,"metric":"1000 trillion","title":"Stars in Galaxy"},
  {"id":2,"metric":"5200 thousand","title":"Alien Species"},
  {"id":3,"metric":"2","title":"Gods"}
]} />, document.getElementById('dash1'));  //this tells the DOM to insert the List component into the DOM element ID called ingredients
ReactDOM.render(<Dashboard id="2" dashTitle="Adromeda" backgroundImage="images/mtnstars.jpeg" item={[
  {"id":1,"metric":"200 trillion","title":"Stars in Galaxy"},
  {"id":2,"metric":"100 hundred","title":"Alien Species"},
  {"id":3,"metric":"3","title":"Cats"}
]} />, document.getElementById('dash2'));  //this tells the DOM to insert the List component into the DOM element ID called ingredients
ReactDOM.render(<SideDashboard id="1" item={[
  {"id":1,"metric":"1.5k","title":"New Visitors"},
  {"id":2,"metric":"50%","title":"Bounce Rate"},
  {"id":3,"metric":"27%","title":"Searchs"},
  {"id":4,"metric":"150.0kb","title":"Traffic"}
]} />, document.getElementById('sidebar'));  //this tells the DOM to insert the List component into the DOM element ID called ingredients
