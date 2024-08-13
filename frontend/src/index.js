import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Home from './views/home';
import NotFound from './views/not-found';
import Login from './views/login';
import Account from './views/account';
import ControlledTest from './views/controlledTest';
import AmbientSoundscapes from './views/ambientSoundscapes';
import FreePlay from './views/freePlay';
import Navbar8 from './components/navbar8';
import Footer4 from './components/footer4';
import PreListeningQuestionnaire from './views/PreListeningQuestionnaire';
import PostListeningQuestionnaire from './views/PostListeningQuestionnaire';
import PostSoundscapeQuestionnaire from './views/PostSoundscapeQuestionnaire';
import PlaygroundQuestionnaire from './views/playgroundQuestionnaire';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Navbar8 />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/controlledTest" element={<ControlledTest />} />
      <Route path="/preListeningQuestionnaire" element={<PreListeningQuestionnaire />} />
      <Route path="/postListeningQuestionnaire" element={<PostListeningQuestionnaire />} />
      <Route path="/ambientSoundscapes" element={<AmbientSoundscapes />} />
      <Route path="/postSoundscapeQuestionnaire" element={<PostSoundscapeQuestionnaire />} />
      <Route path="/freePlay" element={<FreePlay />} />
      <Route path="/playgroundQuestionnaire" element={<PlaygroundQuestionnaire />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer4 />
  </Router>
);