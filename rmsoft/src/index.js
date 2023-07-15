import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from "react-router-dom";
import './index.css';
import Layout from './rmsoft/Layout';
import Main from './rmsoft/Main';
import { Provider } from 'react-redux'; 
import store from './store.js';

export default function App(){
  return(
    <Provider store={store}>
      <HashRouter>
          <Routes>
             <Route path="/" element={<Layout />}>
                  <Route index element={<Main />} />
                  <Route path="main" element={<Main />} />
             </Route>
          </Routes>
      </HashRouter>
    </Provider>
  );
} //////////////// App 컴포넌트 //////////////////

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

