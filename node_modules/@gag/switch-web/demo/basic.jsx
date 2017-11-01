import React from 'react';
import ReactDOM from 'react-dom';
import Switch from '../src';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

ReactDOM.render(
  <Switch defaultChecked={false} onChange={onChange} />,
   document.getElementById('sk-root')
);
