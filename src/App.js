import React from 'react';
import UserContextProvider from './context/UseContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Result from './pages/Result';
import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';
import Instruction from './pages/Instruction';
import ErroPage from './pages/ErrorPage';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path='/result' element={<Result />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/instruction' element={<Instruction />} />
          <Route path='/' element={<Welcome />} />
          <Route path='*' element={<ErroPage />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
