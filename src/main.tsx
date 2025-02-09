import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import Layout from './components/layout/Layout.tsx'
import NotFound from './components/NotFound.tsx'
//import UserItem from './components/UserItem.tsx'

import UserItem from './components/UserItem.tsx'
import AuthLayout from './components/layout/AuthLayout.tsx'
import Login from './components/login/Login.tsx'
import Register from './components/register/Register.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>

      <BrowserRouter>
        <Routes>

          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />

          <Route element={<AuthLayout />}>
            <Route element={<Layout />}>
              <Route path="/crud" element={<App />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/useritem/:id' element={<UserItem />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
      
    </AuthProvider>
  </StrictMode>,
)
