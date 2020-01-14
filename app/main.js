import React from 'react';
import {render} from 'react-dom';
import Buttons from './Buttons';
import './main.css';
if (module.hot) {
  module.hot.accept();
}

render(<Buttons />, document.getElementById('root'));