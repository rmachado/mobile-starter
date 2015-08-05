var React = require('react');
var CircularProgress = require('material-ui/lib/circular-progress');

var SplashScreen = React.createClass({

  getInitialState : function() {
    return {
      ready: false
    };
  },

  componentDidMount : function() {
    var self = this;
    var delay = this.props.delay || 3000;

    setTimeout(function(){
      self.setState({ ready : true });
    }, delay);
  },

  render: function() {

    if(this.state.ready)
      return this.props.children;

    return (
      <div id="splashscreen">
        <div>
          <img src="img/logo.png" className="logo" />
          <p className="label">Loading...</p>
          <CircularProgress
            mode="indeterminate"
            size={2}
            style={{
              'display': 'block',
              'margin': '8em auto 0 auto'
            }}/>
        </div>
      </div>
    );
  },

});

module.exports = SplashScreen;
