import React, { useContext, useState } from 'react'
import * as PD from './ProductsStyles'
import { StoreContext } from '../../share/contexts/store'
import FiveStars from '../../share/assets/img/fivestars.png'
import prod from '../../share/assets/img/products/oleo1.jpg'
import prod2 from '../../share/assets/img/products/oleo.jpg'
import { Link } from 'react-router-dom'
import { CartContext } from '../../share/contexts/cart'


export const Products = () => {
    const { products } = useContext(StoreContext)
    const { addCart } = useContext(CartContext)
    const [ changePhoto, setChangePhoto ] = useState(false)
    const imgPath = process.env.REACT_APP_PATH_IMG_FOLDER
    // const baseUrl = process.env.REACT_APP_BASEURL

    return (
        <PD.Container>
            {products.map((item, index)=>{
                return (
                    <PD.Box key={index}>
                        <PD.Title>{item.name}</PD.Title>
                        <PD.Stars>
                            <figure>
                                <img src={FiveStars} alt='' width={100} />
                            </figure>
                        </PD.Stars>
                        <PD.Stars>
                            <figure>
                                <img src={prod} alt='' width={200} />
                                {/* <figcaption>Imagem do produto {item.name}</figcaption> */}
                            </figure>
                        </PD.Stars>
                        <PD.Description>{item.description}</PD.Description>
                        <PD.Price>{item.price}</PD.Price>
                        {/* <PD.NavLink to={`/cart/${item.id}`}>Adicionar</PD.NavLink> */}
                        <PD.NavLink onClick={()=>addCart(item.id)}>Adicionar</PD.NavLink>
                        <PD.Button>Adicionar</PD.Button>
                    </PD.Box>
                )
            })}
        </PD.Container>
    )
}
