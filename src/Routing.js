import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import EditDepartment from './components/EditDepartment';

export default function Routing() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="main" element={<Main></Main>} />
            <Route path="" element={<Main></Main>} />
            <Route path="editdepartment" element={<EditDepartment></EditDepartment>} />
          </Routes>
    </BrowserRouter>
  )
}
