import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';

export default function Routing() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="main" element={<Main></Main>} />
            <Route path="" element={<Main></Main>} />

          </Routes>
    </BrowserRouter>
  )
}
