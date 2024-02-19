import React from 'react';
import Stars from './components/Stars';
import './App.css';

function App() {
  return (
    <div className="container">
      <Stars count={3}/>
    </div>
  );
}

export default App;
