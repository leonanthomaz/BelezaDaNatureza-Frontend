
import React, { useState } from "react";
import * as H from './HeaderStyles'
import LogoImg from '../../share/assets/img/logo-png.png'
import { BsSearch, BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Header = () => {
    const [ click, setClick ] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const closeNavbar = () => {
        if(click === true){
          setClick(false)
        }
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
                {click ? <AiOutlineClose style={{
                    cursor: 'pointer'
                }}
                onClick={handleClick} 
                /> : <BiMenu onClick={handleClick} style={{
                    cursor: 'pointer'
                }}/> }
                <H.Icons>
                    <BsSearch/>
                    <Link to='/cart'>
                        <BsBag/>
                    </Link>
                    <AiOutlineUser/>
                </H.Icons>
                
            </H.Right>
        </H.Container>
    )
}