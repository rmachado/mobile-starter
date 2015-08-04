var React = require('react');
var AppBar = require('material-ui/lib/app-bar');

var HomePage = React.createClass({

    getInitialState: function() {
        return {
          heading: 'Starter App',
          subheading : 'Welcome to the Home Page!'
        };
    },

    render: function () {
        return (
            <div>
                <AppBar title={this.state.heading} />
                <h2>{this.state.subheading}</h2>
            </div>
        );
    },

});

module.exports = HomePage;
