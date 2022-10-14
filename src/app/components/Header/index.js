
import React from "react";
import * as HE from './HeaderStyles'

export const Header = () => {
    return(
        <HE.Container>
           <HE.Menu>
                <HE.Nav>Sobre nós</HE.Nav>
                <HE.Nav>Blog</HE.Nav>
                <HE.Nav>Atendimento</HE.Nav>
                <HE.Nav>Whatsapp</HE.Nav>
            </HE.Menu>
        </HE.Container>
    )
}