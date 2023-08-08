import {Log} from './pages/log';
import {Post} from './pages/post';
import {List} from './pages/list';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Navbar';

function App() {
  return (
  <>
     <NavigationBar />
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/list" element={<List />} />
        <Route path="/" element={<Log />} />
      </Routes>
  </>
  
  );
}

export default App;
