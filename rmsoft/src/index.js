import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from "react-router-dom";
import './index.css';
import Layout from './rmsoft/Layout';
import Main from './rmsoft/Main';

export default function App(){
  return(
      <HashRouter>
          <Routes>
             <Route path="/" element={<Layout />}>
                  <Route index element={<Main />} />
                  <Route path="main" element={<Main />} />
             </Route>

          </Routes>
      </HashRouter>
  );
} //////////////// App 컴포넌트 //////////////////

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

