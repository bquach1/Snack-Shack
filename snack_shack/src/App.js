import './css/App.css';
import HomeScreen from './screens/home.js';
import DealScreen from './screens/deals.js';
import FeedScreen from './screens/feed.js';
import PackScreen from './screens/pack.js';

import Sidebar from './components/sidebar.js';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/deals' element={<DealScreen />} />
            <Route path='/feed' element={<FeedScreen />} />
            <Route path='/pack' element={<PackScreen />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
