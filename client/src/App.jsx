import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import { CustomItemList } from './components/CustomItemList';
import { AddCustomItem } from './components/AddCustomItem';
import './App.css';

const App = () => {
  <div>
    <Navigation />
      <Routes>
      <Route path="/" element={<CustomItemList />} />
        <Route path="add-item" element={<AddCustomItem />} />
      </Routes>
      </div>
}


export default App;
