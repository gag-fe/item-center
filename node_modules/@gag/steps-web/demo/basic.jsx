import React from 'react';
import ReactDOM from 'react-dom';
import Steps from '../src';
const Step = Steps.Step;

ReactDOM.render(
  <Steps current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
,  document.getElementById('sk-root'));
