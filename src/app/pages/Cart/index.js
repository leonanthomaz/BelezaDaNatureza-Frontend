import React from 'react'
import { Categories } from '../../components/Categories'
import { Header } from '../../components/Header'
import * as C from './CartStyles'

export const Cart = () => {
    return (
        <C.Container>
            <Header/>
            <Categories/>
        </C.Container>
    )
}
