import { useEffect, useState } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Screens/Login';
import Header from './Components/Header';
import { Home } from '@mui/icons-material';
import VideoPlayer from './Components/Screens/VideoPlayer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/videoplayer' element={<VideoPlayer />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
