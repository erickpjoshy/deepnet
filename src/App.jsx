import { useState } from 'react';
import Header from '../src/components/Header';
import Menu from './pages/Menu';
import Category from './pages/Category';
import Items from './pages/Items';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/addcategory" element={<Category />} />
        <Route path="/addmenu" element={<Items />} />
      </Routes>
    </>
  );
}

export default App;
