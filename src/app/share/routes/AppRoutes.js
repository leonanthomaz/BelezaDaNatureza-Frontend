
import { Routes, Route } from 'react-router-dom'
import { Cart } from '../../pages/Cart'
import { Home } from '../../pages/Home'

export const AppRouter = () => { 
    
    return(
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    )
}