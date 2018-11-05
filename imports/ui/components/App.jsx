import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import Roman from "./Roman";

const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Roman/>
    <Hello/>
  </div>
);

export default App;
