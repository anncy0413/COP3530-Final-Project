
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import MainPage from './pages/MainPage';
import App from './App'; 
import AnalysisPage from "./pages/AnalysisPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/visualize" element={<App />} />
            <Route path="/analysis" element={<AnalysisPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
