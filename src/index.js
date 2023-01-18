import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Youtube from './components/Youtube';
import {Header} from './components/Header';
ReactDOM.render(
  <React.StrictMode>
   
    <Router>
    <Header/>
      <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route path='/yt' element={<Youtube/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

