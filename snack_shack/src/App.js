import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import HomeScreen from './screens/home.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/home' element={<HomeScreen />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
