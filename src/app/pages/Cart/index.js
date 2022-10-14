import React, { useContext, useEffect, useState } from 'react'
import { Categories } from '../../components/Categories'
import { Header } from '../../components/Header'
import { StoreContext } from '../../share/contexts/store'
import * as C from './CartStyles'
import { Link } from 'react-router-dom'

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
            <Header/>
            <Categories/>
            {cart ? cart.map((item)=>{
                return(
                <>
                {products && products.filter(i => i.id === item.id).map(a =>{
                    return(
                    <>
                    <p>{a.id}</p>
                    <p>{a.name}</p>
                    <p>{a.price}</p>
                    <p>{item.qtd}x</p>
                    </>
                    )
                })}
                </>
                )
            }) : "Carrinho vazio" } <br/><hr/>
            Cart <Link to='/checkout'>Finalizar</Link>
        </C.Container>
    )
}
