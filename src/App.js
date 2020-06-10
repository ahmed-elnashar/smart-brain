import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.component';
import Logo from './components/Logo/Logo.components';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.components';
import Rank from './components/Rank/Rank.components';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        balue_area: 800,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  onInputChange = event => {
    console.log(event.target.value);
  };

  onSubmit = () => {
    console.log('click');
  };

  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;

/*
app.models
.predict(
Clarifai.COLOR_MODEL,
    URL
    "https://samples.clarifai.com/metro-north.jpg"
)
.then(function(response) {
    do something with responseconsole.log(response);
    },
    function(err) {// there was an error}
);
*/
