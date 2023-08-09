import {Log} from './pages/log';
import {Post} from './pages/post';
import {List} from './pages/list';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Navbar';

import { AlertState } from './Context/alert/AlertState';
import Alert from './Components/Alert';

function App() {
  return (
  <><AlertState>
     <NavigationBar />
     <Alert />
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/list" element={<List />} />
        <Route path="/" element={<Log />} />
      </Routes>
    </AlertState>
  </>
  
  );
}

export default App;
