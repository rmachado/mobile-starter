var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var SplashScreen = require('./SplashScreen');
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var Colors = require('material-ui/lib/styles/colors');

var StarterApp = React.createClass({

    mixins: [Router.Navigation],

    childContextTypes: {
      muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
    },

    componentWillMount: function() {
      ThemeManager.setPalette({
        accent1Color: Colors.deepOrange500
      });
    },

    render: function() {
        return (
          <SplashScreen delay={5000}>
            <RouteHandler/>
          </SplashScreen>
        );

    }
});

module.exports = StarterApp;
