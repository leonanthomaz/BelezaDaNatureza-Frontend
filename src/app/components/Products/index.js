import React, { useContext, useState } from 'react'
import * as PD from './ProductsStyles'
import { StoreContext } from '../../share/contexts/store'
import FiveStars from '../../share/assets/img/fivestars.png'
import prod from '../../share/assets/img/products/oleo1.jpg'
import prod2 from '../../share/assets/img/products/oleo.jpg'
import { Link } from 'react-router-dom'


export const Products = () => {
    const { products } = useContext(StoreContext)
    const [ changePhoto, setChangePhoto ] = useState(false)
    const imgPath = process.env.REACT_APP_IMG_PATH
    const baseUrl = process.env.REACT_APP_BASEURL

    console.log(changePhoto)

    return (
        <PD.Container>
            {products.map((item, index)=>{
                console.log(item.img1)
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
                            <   img src={changePhoto ? prod : prod2 } onMouseLeave={()=>{setChangePhoto(false)}} onMouseEnter={()=>{setChangePhoto(true)}} alt='' width={200} />
                            {/* <   img src={changePhoto ? `${baseUrl}src/app/share/assets/img/products/${item.img1}` : `${baseUrl}src/app/share/assets/img/products/${item.img2}`} onMouseLeave={()=>{setChangePhoto(false)}} onMouseEnter={()=>{setChangePhoto(true)}} alt='' width={200} /> */}
                            </figure>
                        </PD.Stars>
                        <PD.Description>{item.description}</PD.Description>
                        <PD.Price>{item.price}</PD.Price>
                        <Link to='/cart'>Adicionar</Link>
                        <PD.Button>Adicionar</PD.Button>
                    </PD.Box>
                )
            })}
        </PD.Container>
    )
}
