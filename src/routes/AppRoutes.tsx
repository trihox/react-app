import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}
