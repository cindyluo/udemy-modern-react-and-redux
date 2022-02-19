import React from 'react';
import ReactDOM from 'react-dom';

function getTime() {
  return (new Date()).toLocaleTimeString()
}

// Create a react component
const App = () => {
  const buttonText = { text: 'click on me!' };
  const labelText = 'Enter name:';
  const style = { backgroundColor: 'blue', color: 'white' };

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText.text}
      </button>
      <hr />
      <div>Current Time:</div>
      <h3>{getTime()}</h3>
    </div>
  );
}

// Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector('#root'));