import React, { Component } from 'react';

import Navigation from './components/Navigation/Navigation.component';
import Logo from './components/Logo/Logo.components';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.components';
import Rank from './components/Rank/Rank.components';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.components';
import Signin from './components/Signin/Signin.components';
import Register from './components/Register/Register.components';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: '4154f12ab5f24f34a2ce8cd9571a405d',
});

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
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
    };
  }

  calcFaceLocation = data => {
    const clarigaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarigaiFace.left_col * width,
      topRow: clarigaiFace.top_row * height,
      rightCol: width - clarigaiFace.right_col * width,
      bottomRow: height - clarigaiFace.bottom_row * height,
    };
  };

  displayFaceBox = box => {
    console.log(box);
    this.setState({ box: box });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calcFaceLocation(response)))
      .catch(err => console.log(err));
  };

  onRouteChange = route => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false });
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className='App'>
        <Particles className='particles' params={particlesOptions} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === 'home' ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        ) : route === 'signin' ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
