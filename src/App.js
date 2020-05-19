import React from 'react';
import './App.css';
import New from './components/pages/New';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PostPage from './components/PostPage';
import Home from './components/pages/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import About from './components/pages/About';

library.add(fab)

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/new" component={New} />
        <Route path="/about" component={About} />
        <Route path="/post/:postId" component={PostPage} />
      </div>
    </Router>
  );
}

export default App;
