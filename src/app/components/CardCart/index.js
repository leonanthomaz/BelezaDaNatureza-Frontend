import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../share/contexts/cart'
import * as CC from './CardCartStyles'

export const CardCart = ({id, img, name, price, qtd}) => {
    const { addCart, removeCart, removeItem, setCart } = useContext(CartContext)    
    return (
        <CC.Container>

            <CC.Left>
                <img src={img} alt='' width={100} />
            </CC.Left>
            <CC.Right>
                <CC.Title>{name}</CC.Title>
                <span>Spinner</span>
                <CC.Price><p>{price}</p></CC.Price>
                <CC.Price><p>{qtd}x</p></CC.Price>
                <CC.Total><p>{price}</p></CC.Total>
                <button onClick={()=>addCart(id)}>adicionar</button>
                { qtd > 1 ?
                <button onClick={()=>removeItem(id)}>removeItem</button>
                 : 
                <button onClick={()=>removeCart(id)}>remover carrinho</button>
                }
                
                
            </CC.Right>

        </CC.Container>
    )
}
