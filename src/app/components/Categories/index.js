
import React, { useState } from "react";
import * as CT from './CategoriesStyles'
import LogoImg from '../../share/assets/img/logo-png.png'
import { BsSearch, BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Categories = () => {
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
        <CT.Container>
            <CT.Left>
                <CT.LogoContainer>
                    <CT.Logo>
                        <img src={LogoImg} alt='' />
                    </CT.Logo>
                </CT.LogoContainer> 
            </CT.Left>
            <CT.Center>
               
                <CT.Menu click={click}>
                    <CT.Nav onClick={handleClick}>Home</CT.Nav>
                    <CT.Nav>Skincare</CT.Nav>
                    <CT.Nav>Corpo</CT.Nav>
                    <CT.Nav>Cabelo</CT.Nav>
                    <CT.Nav>Aromas</CT.Nav>
                </CT.Menu>
            </CT.Center>
            <CT.Right>
                {click ? <AiOutlineClose style={{
                    cursor: 'pointer'
                }}
                onClick={handleClick} 
                /> : <BiMenu onClick={handleClick} style={{
                    cursor: 'pointer'
                }}/> }
                <CT.Icons>
                    <BsSearch/>
                    <Link to='/cart'>
                        <BsBag/>
                    </Link>
                    <AiOutlineUser/>
                </CT.Icons>
                
            </CT.Right>
        </CT.Container>
    )
}