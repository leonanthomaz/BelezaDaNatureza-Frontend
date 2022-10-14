import React from 'react'
import * as CC from './CardCartStyles'

export const CardCart = ({id, img, name, price, qtd}) => {

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
            </CC.Right>

        </CC.Container>
    )
}
