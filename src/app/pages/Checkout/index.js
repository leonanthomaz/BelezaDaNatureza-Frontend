
import React, { useContext } from 'react'
import { Header } from '../../components/Header'
import { Topbar } from '../../components/Topbar'
import { CartContext } from '../../share/contexts/cart'
import { StoreContext } from '../../share/contexts/store'
import * as CK from './CheckoutStyles'


export const Checkout = () => {
    const { cart } = useContext(CartContext)
    const { products } = useContext(StoreContext)
    
    return (
        <CK.Container>
            <Topbar/>
            <Header/>
            { cart && cart.map((item)=>{
                return (
                    products.filter(c => c.id === item.id).map((p, index)=>{
                        return(
                            <div key={index}>
                                <h1>id: {p.id}</h1>
                                <h1>produto: {p.name}</h1>
                                <h1>preço: {p.price}</h1>
                                <h1>quantidade: {item.qtd}</h1>
                                <hr/>
                            </div>
                        )
                    })
                    
                )
            }) }
        </CK.Container>
    )
}
