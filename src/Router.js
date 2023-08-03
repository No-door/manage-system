import React from 'react'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { Route, Routes } from 'react-router-dom'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
        </Routes>
    )
}
