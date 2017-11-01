import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from '../src';

ReactDOM.render(
  <Tooltip title="prompt text">
    <span>Tooltip will show when mouse enter.</span>
  </Tooltip>
, document.getElementById('sk-root'));
