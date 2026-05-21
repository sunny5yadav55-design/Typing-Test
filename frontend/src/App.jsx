import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav.jsx';

// Pages
import Dashboard from './pages/Dashboard.jsx';
import LessonsHub from './pages/LessonsHub.jsx';
import LessonPlayer from './pages/LessonPlayer.jsx';
import Tests from './pages/Tests.jsx';
import GamesHub from './pages/GamesHub.jsx';
import Progress from './pages/Progress.jsx';
// Games
import BubblePop from './games/BubblePop.jsx';
import WordFall from './games/WordFall.jsx';
import ZType from './games/ZType.jsx';
import SpeedRace from './games/SpeedRace.jsx';

const App = () => {
  return (
    <>
      <Nav />
      <div style={{ animation: 'fadeIn 0.2s ease' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lessons" element={<LessonsHub />} />
          <Route path="/lessons/:id" element={<LessonPlayer />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/games" element={<GamesHub />} />
          <Route path="/games/bubble-pop" element={<BubblePop />} />
          <Route path="/games/word-fall" element={<WordFall />} />
          <Route path="/games/ztype" element={<ZType />} />
          <Route path="/games/speed-race" element={<SpeedRace />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
