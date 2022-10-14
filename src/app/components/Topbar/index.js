
import React from "react";
import { Link } from "react-router-dom";
import * as T from './TopbarStyles'

export const Topbar = () => {
    return(
        <T.Container>
           <T.Menu>
                <Link to='/myaccount'>
                    <T.Nav>Sobre nós</T.Nav>
                </Link>
                <Link to='/myaccount'>
                    <T.Nav>Blog</T.Nav>
                </Link>
                <Link to='/myaccount'>
                    <T.Nav>Whatsapp (21) 99999-9999</T.Nav>
                </Link>
            </T.Menu>
        </T.Container>
    )
}