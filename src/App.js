import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom'

import Content from './components/content/Content';
import Header from './components/header/Header';

const App = props => (
  <Router>
    <Header />
    <Content />
  </Router>
)

export default App
