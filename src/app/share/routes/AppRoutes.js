
import { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes, Route, Navigate } from 'react-router-dom'
import { Cart } from '../../pages/Cart'
import { Checkout } from '../../pages/Checkout';
import { Home } from '../../pages/Home'
import { Login } from '../../pages/Login';
import { MyAccount } from '../../pages/MyAccount';
import { Register } from '../../pages/Register';
import { AuthContext } from '../contexts/auth'

import { AuthProvider } from '../contexts/auth'

export const AppRouter = () => { 
    const { user } = useContext(AuthContext)
    
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/categories/:id' exact element={<Home/>}/>
                    <Route path='/cart' element={ <Cart />}/>
                    <Route path='/login' element={user ? <Navigate to="/" /> : <Login />}/>
                    <Route path='/register' element={user ? <Navigate to="/" /> : <Register />}/>
                    <Route path='/checkout' element={!user ? <Navigate to="/login" /> : <Checkout />}/>
                    <Route path='/myaccount' element={!user ? <Navigate to="/" /> : <MyAccount />}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}