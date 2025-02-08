import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import Layout from './components/layout/Layout.tsx'
import NotFound from './components/NotFound.tsx'
import UserItem from './components/UserItem.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/useritem/:id' element={<UserItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
