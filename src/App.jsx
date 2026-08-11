import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HubHome from '../HubHome';
import Pagination from './challenges/Pagination';
import TabFormComponent from './challenges/TabFormComponent';
import AutoCompleteSearch from './challenges/AutoCompleteSearch';
import VirtualizedList from './challenges/VirtualizedList';
import ProgressBar from './challenges/ProgressBar';
import OTPInput from './challenges/OTPInput';
import Assistant from './assistant/Assistant';
import Fevscsidebar from './challenges/Fevscsidebar';
export default function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HubHome />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/tabformcomponent" element={<TabFormComponent />} />
           <Route path="/autocompletesearch" element={<AutoCompleteSearch/>}/>
           <Route path="/otpinput" element={<OTPInput/>}/>
               <Route path="/progressbar" element={<ProgressBar/>}/>
                 <Route path="/virtualizedlist" element={<VirtualizedList/>}/>
                 <Route path="/fevscsidebar" element={<Fevscsidebar/>} />
        </Routes>
    </BrowserRouter>
    <Assistant />
  </>
  );
}