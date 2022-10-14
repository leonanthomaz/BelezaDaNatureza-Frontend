
import React from "react";
import * as T from './TopbarStyles'

export const Topbar = () => {
    return(
        <T.Container>
           <T.Menu>
                <T.Nav>Sobre nós</T.Nav>
                <T.Nav>Blog</T.Nav>
                <T.Nav>Atendimento</T.Nav>
                <T.Nav>Whatsapp</T.Nav>
            </T.Menu>
        </T.Container>
    )
}