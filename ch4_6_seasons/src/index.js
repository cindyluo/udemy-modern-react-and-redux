import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, long: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('My component was just updated it rendered! ')
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat && !this.state.long) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat && this.state.long) {
      return <SeasonDisplay lat={this.state.lat} long={this.state.long} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  // React says we have to define render!!
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));