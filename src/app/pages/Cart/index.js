import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Topbar } from '../../components/Topbar'
import { StoreContext } from '../../share/contexts/store'
import * as C from './CartStyles'
import { Link } from 'react-router-dom'
import { CardCart } from '../../components/CardCart'
import prod from '../../share/assets/img/products/oleo.jpg'
import { CartContext } from '../../share/contexts/cart'

export const Cart = () => {

    const { products } = useContext(StoreContext)
    const { cart, setCart } = useContext(CartContext)

    const carrinho = JSON.parse(localStorage.getItem("cart"))
    useEffect(()=>{
        setCart(carrinho)
    },[carrinho.length > 0])

    return (
        <C.Container>
            <Topbar/>
            <Header/>
            <C.CartContainer>
                <C.CartBox>
                    {cart ? cart.map((item)=>{
                        return(
                            products && products.filter(i => i._id === item.id).map(a =>{
                                return(
                                <>
                                <CardCart
                                id={a._id}
                                // img={a.img}
                                img={prod}
                                name={a.name}
                                price={a.price}
                                qtd={item.qtd}
                                />
                                </>
                                )
                            })
                        )
                    }) : "Carrinho vazio" } <br/><hr/>
                    Cart <Link to='/checkout'>Finalizar</Link>
                </C.CartBox>
            </C.CartContainer>
        </C.Container>
    )
}
