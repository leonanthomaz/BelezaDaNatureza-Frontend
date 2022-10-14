
import React from "react";
import { Products } from "../Products";
import * as EM from './EmphasisStyles'

export const Emphasis = () => {
    return(
        <EM.Container>
            <h1>Emphasis</h1>
            <Products/>
        </EM.Container>
    )
}