import React from 'react';
import { DisplayText } from './components/DisplayText';
import { MyCounter } from './components/MyCounter';


const App: React.FC = () => {
  return <div>

    <h2>Display Text</h2>
    <DisplayText /> 

    <hr />

    <h2>My Counter</h2>
    <MyCounter />
  </div>
}

export default App;
