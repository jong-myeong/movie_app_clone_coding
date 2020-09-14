import React from 'react';
// import Home from './routes/Home'; ⇒ 잠시 삭제
import './App.css'
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}

export default App;