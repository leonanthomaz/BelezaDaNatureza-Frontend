
import React, { useContext } from "react";
import * as EM from './EmphasisStyles'
import { StoreContext } from "../../share/contexts/store";
import { CardProducts } from "../CardProducts";

export const Emphasis = () => {
    const { products } = useContext(StoreContext)

    return(
        <EM.Container>
            <h1>Destaques</h1>
            <EM.CardContainer>
                {products.map((item, index)=>{
                    if(item.emphasis === 2){
                        return (
                            <CardProducts
                                key={index}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                img={item.img}
                                price={item.price}
                            />
                        )
                    }
                })}
            </EM.CardContainer>
        </EM.Container>
    )
}