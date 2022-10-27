import React, { useContext } from 'react'
import { CartContext } from '../../../sharing/context/cart'
import * as CC from './CardCartStyles'
import { BsFillEraserFill } from "react-icons/bs";
import { useState } from 'react';

export const CardCart = ({id, img, name, price, qtd}) => {
    const { addCart, removeCart, removeItem } = useContext(CartContext)    
    const pathImg = process.env.REACT_APP_PATH_IMG_FOLDER


    return (
        <CC.Container>
            <CC.Wrapper>
                <CC.Left>
                    <div className='cart-img-container'>
                        <img src={pathImg + img} alt='' width={100} />
                    </div>
                </CC.Left>
                <CC.Right >
                    <h2>{name}</h2>
                    <h4><span>{qtd}x </span>{price}</h4>
                    <h5><span>Subtotal: </span>{(parseFloat(price) * parseFloat(qtd)).toLocaleString()}</h5>
                    <CC.ButtonContainer>
                        <CC.IconPlus onClick={()=>addCart(id)}></CC.IconPlus>
                        { qtd > 1 ?
                        <CC.IconMinus onClick={()=>removeItem(id)}></CC.IconMinus>
                        : 
                        <CC.IconClose onClick={()=>removeCart(id)}></CC.IconClose>
                        }
                    </CC.ButtonContainer>
                    
                </CC.Right>
            </CC.Wrapper>
            {/* <CC.Total><h2>Total:</h2></CC.Total> */}
        </CC.Container>
    )
}
