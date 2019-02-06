import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Main from './helpers/Main'

class ReactRouterv4Simple extends Component {
  render() {
    return (
        <BrowserRouter>
          <Main />
        </BrowserRouter>
    );
  }
}

export default ReactRouterv4Simple;
