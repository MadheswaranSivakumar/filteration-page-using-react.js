import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Show from './Components/results';
import App2 from './Components/index2';
// import App3 from './Components/index1';
import Login from './Components/login';
import Resulttable from './Components/result';
import reportWebVitals from './reportWebVitals';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Leftside from './Components/signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/result" element={<Show/>}/>
      <Route path="/final" element={<App2/>}/>
      <Route path="/final1" element={<Resulttable/>}/>
      <Route path="/signup" element={<Leftside />}/>
      <Route path="/signin" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
