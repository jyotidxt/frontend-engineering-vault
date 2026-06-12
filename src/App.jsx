import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HubHome from '../HubHome';
import Pagination from './challenges/Pagination';
import TabFormComponent from './challenges/TabFormComponent';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HubHome />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/tabformcomponent" element={<TabFormComponent />} />
        </Routes>
    </BrowserRouter>
  );
}