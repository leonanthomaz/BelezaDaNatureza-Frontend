
import React, { useContext } from "react";
import { Products } from "../Products";
import * as N from './NewsStyles'
import { StoreContext } from "../../share/contexts/store";
import { CardProducts } from "../CardProducts";

export const News = () => {
    const { products } = useContext(StoreContext)

    return(
        <N.Container>
            <h1>Novidades</h1>
            <N.CardContainer>
                {products.map((item, index)=>{
                    if(item.news === 1){
                        return (
                            <CardProducts
                                key={index}
                                id={item.id}
                                name={item.name}
                                description={item.description}
                                FiveStars={item.FiveStars}
                                img={item.img}
                                price={item.price}
                            />
                        )
                    }
                })}
            </N.CardContainer>
        </N.Container>
    )
}