import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Topbar } from '../../components/Topbar'
import { StoreContext } from '../../share/contexts/store'
import * as C from './CartStyles'
import { Link } from 'react-router-dom'
import { CardCart } from '../../components/CardCart'
import prod from '../../share/assets/img/products/oleo.jpg'

export const Cart = () => {

    const { products } = useContext(StoreContext)

    const [ cart, setCart ] = useState([])
    console.log('cart',cart)
    useEffect(()=>{
      const cartLocal = JSON.parse(localStorage.getItem("cart"))
      setCart(cartLocal)
    },[])

    return (
        <C.Container>
            <Topbar/>
            <Header/>
            <C.CartContainer>
                <C.CartBox>
                    {cart && cart ? cart.map((item)=>{
                        return(
                            products && products.filter(i => i.id === item.id).map(a =>{
                                return(
                                <>
                                <CardCart
                                id={a.id}
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
