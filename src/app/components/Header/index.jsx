
import React, { useContext, useEffect, useState } from "react";
import * as H from './HeaderStyles';
import { Link } from "react-router-dom";
import { CartContext } from "../../sharing/context/cart";

export const Header = () => {
    const { setCart } = useContext(CartContext)

    const pathImg = process.env.REACT_APP_PATH_IMG_LOCAL
    
    const carrinho = JSON.parse(localStorage.getItem("cart"))
    useEffect(()=>{
        setCart(carrinho)
    },[carrinho > 0])

    const [ click, setClick ] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const [blackHeader, setBlackHeader] = useState();

    useEffect(() => {
        const scrollLinstener = () => {
        if(window.scrollY > 10){
            setBlackHeader(true);
        }else{
            setBlackHeader(false);
        }
        }
        window.addEventListener('scroll', scrollLinstener);
        return () => {
        window.removeEventListener('scroll', scrollLinstener);
        }
    }, []);

    return(
        <H.Container blackHeader={blackHeader}>
            <H.Left>
                <H.LogoContainer>
                    <H.Logo>
                        <Link to='/'>
                            <img src={pathImg + 'logo.png'} alt='' />
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
                        <Link to='/categories/corpo'>Corpo</Link>
                    </H.Nav>
                    <H.Nav>
                        <Link to='/categories/cabelo'>Cabelo</Link>
                    </H.Nav>
                    <H.Nav>
                        <Link to='/categories/aromas'>Aromas</Link>
                    </H.Nav>
                </H.Menu>
            </H.Center>
            <H.Right>
                <H.IconsContainer>
                    {click ? <H.IconClose style={{
                        cursor: 'pointer'
                    }}
                    onClick={handleClick} 
                    /> : <H.IconMenu onClick={handleClick} style={{
                        cursor: 'pointer'
                    }}/> }
                    
                    <Link to='/cart'>
                        <H.CartContainer>
                            <H.CartIcon><H.IconSacola/></H.CartIcon>
                            {carrinho && carrinho.length > 0 ? 
                            <H.CartNumber>
                                <span>{carrinho ? carrinho.length : ''}</span>
                            </H.CartNumber>
                            : '' }
                        </H.CartContainer>
                    </Link>
                </H.IconsContainer>
            </H.Right>
        </H.Container>
    )
}