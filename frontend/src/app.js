import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import './style.css';
import NotFound from './views/not-found';
import Login from './views/login';
import ControlledTest from './views/controlledTest';
import AmbientSoundscapes from './views/ambientSoundscapes';
import FreePlay from './views/freePlay';
import Navbar8 from './components/navbar8';
import Footer4 from './components/footer4';
import PreListeningQuestionnaire from './views/PreListeningQuestionnaire';
import PostListeningQuestionnaire from './views/PostListeningQuestionnaire';


function App() {
  return (
    <Router>
      <Navbar8 />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/controlledTest" component={ControlledTest} />
        <Route path="/preListeningQuestionnaire" component={PreListeningQuestionnaire} />
        <Route path="/postListeningQuestionnaire" component={PostListeningQuestionnaire} />
        <Route path="/ambientSoundscapes" component={AmbientSoundscapes} />
        <Route path="/freePlay" component={FreePlay} />
        <Route component={NotFound} />
      </Switch>
      <Footer4 />
    </Router>
  );
}

export default App;