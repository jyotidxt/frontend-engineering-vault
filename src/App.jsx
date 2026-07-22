import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HubHome from '../HubHome';
import Pagination from './challenges/Pagination';
import TabFormComponent from './challenges/TabFormComponent';
import AutoCompleteSearch from './challenges/AutoCompleteSearch';
import VirtualizedList from './challenges/VirtualizedList';
export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HubHome />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/tabformcomponent" element={<TabFormComponent />} />
           <Route path="/autocompletesearch" element={<AutoCompleteSearch/>}/>
           <Route path="/virtualizedlist" element={<VirtualizedList/>}/>
        </Routes>
    </BrowserRouter>
  );
}