import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HubHome from '../HubHome';
import Pagination from './challenges/Pagination';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HubHome />} />
          <Route path="/pagination" element={<Pagination />} />
        </Routes>
    </BrowserRouter>
  );
}