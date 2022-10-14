import React, { useContext, useState } from 'react'
import { CartContext } from '../../share/contexts/cart'
import * as PD from './ProductsStyles'

export const CardProducts = ({ id, img, name, description, FiveStars, price }) => {
    const { addCart } = useContext(CartContext)
    const pathImg = process.env.REACT_APP_PATH_IMG_FOLDER

    return (
        <PD.Container key={id}>
             <PD.Title>{name}</PD.Title>
                <PD.Img>
                    <figure>
                        <img src={pathImg + img} alt='' width={200} />
                    </figure>
                </PD.Img>
                <PD.Stars>
                    <figure>
                        <img src={pathImg + FiveStars} alt='' width={100} />
                    </figure>
                </PD.Stars>
                <PD.Description>{description}</PD.Description>
                <PD.Price>{price}</PD.Price>
                {/* <PD.NavLink to={`/cart/${item.id}`}>Adicionar</PD.NavLink> */}
            <PD.NavLink onClick={()=>addCart(id)}>Adicionar</PD.NavLink>
        </PD.Container>
    )
}
