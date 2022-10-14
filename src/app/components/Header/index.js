
import React, { useContext, useEffect, useState } from "react";
import * as H from './HeaderStyles'
import LogoImg from '../../share/assets/img/logo-png.png'
import { Link } from "react-router-dom";

export const Header = () => {
    const [ click, setClick ] = useState(false)
    const [ cart, setCart ] = useState([])

    useEffect(()=>{
        setCart(JSON.parse(localStorage.getItem('cart')))
    },[])

    const handleClick = () => {
        setClick(!click)
    }

    return(
        <H.Container>
            <H.Left>
                <H.LogoContainer>
                    <H.Logo>
                        <Link to='/'>
                            <img src={LogoImg} alt='' />
                        </Link>
                    </H.Logo>
                </H.LogoContainer> 
            </H.Left>
            <H.Center>
               
                <H.Menu click={click}>
                    <H.Nav>
                        <Link to='/'>Home</Link>
                    </H.Nav>
                    <H.Nav>
                        <Link to='/categories/skincare'>Skincare</Link>
                    </H.Nav>
                    <H.Nav>
                        <Link to='/'>Corpo</Link>
                    </H.Nav>
                    <H.Nav>
                        <Link to='/'>Cabelo</Link>
                    </H.Nav>
                    <H.Nav>
                        <Link to='/'>Aromas</Link>
                    </H.Nav>
                </H.Menu>
            </H.Center>
            <H.Right>
                
            <H.Icons>
                {click ? <H.IconClose style={{
                    cursor: 'pointer'
                }}
                onClick={handleClick} 
                /> : <H.IconMenu onClick={handleClick} style={{
                    cursor: 'pointer'
                }}/> }
                <Link to='/myaccount'>
                    <H.IconUser/>
                </Link>
                <Link to='/cart'>
                    <H.IconSacola/>
                    {cart ? cart.length : ''}
                    {/* <H.NumberSacola>
                        {number}
                    </H.NumberSacola> */}
                    
                </Link>
                {/* <H.IconSearch/> */}
            </H.Icons>
                
            </H.Right>
        </H.Container>
    )
}