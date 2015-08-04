var React = require('react');
var Router = require('react-router');
var StarterApp = require('./components/StarterApp');
var HomePage = require('./components/HomePage');

var Route = Router.Route;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var routes = (
  <Route handler={StarterApp}>
    <Route path="/home" handler={HomePage} />
  </Route>
);

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();

        Router.run(routes, '/home', function (Handler) {
          React.render(<Handler/>, document.body);
        });

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('Device Ready!');
    }
};

app.initialize();
