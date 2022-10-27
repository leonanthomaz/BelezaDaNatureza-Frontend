
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../sharing/context/auth";
import * as T from './TopbarStyles'

export const Topbar = () => {
    const { user } = useContext(AuthContext)

    return(
        <T.Container>
           <T.Menu>
                <Link to='/about'>
                    <T.Nav>Sobre nós</T.Nav>
                </Link>
                <Link to='/blog'>
                    <T.Nav>Blog</T.Nav>
                </Link>
            </T.Menu>
            <T.IconsContainer>
                <Link to={user ? '/myaccount' : '/login'}>
                    <T.IconUser/>
                </Link>
            </T.IconsContainer>
        </T.Container>
    )
}