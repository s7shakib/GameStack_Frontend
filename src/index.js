import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import GameAdd from './components/GameAdd';
import GameUpdate from './components/GameUpdate';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/games/add" element={<GameAdd />} />
        <Route path="/games/update/:id" element={<GameUpdate />} />
      </Routes>
    </Router>

  </React.StrictMode>
);

