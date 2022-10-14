
import React, { useState } from "react";
import * as CT from './CategoriesStyles'
import LogoImg from '../../share/assets/img/logo-png.png'
import { BsSearch, BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

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
                {click ? <AiOutlineClose style={{
                    cursor: 'pointer'
                }}
                onClick={handleClick} 
                /> : <BiMenu onClick={handleClick} style={{
                    cursor: 'pointer'
                }}/> }
                <CT.Menu click={click}>
                    <CT.Nav onClick={handleClick}>Home</CT.Nav>
                    <CT.Nav>Home</CT.Nav>
                    <CT.Nav>Home</CT.Nav>
                    <CT.Nav>Home</CT.Nav>
                    <CT.Nav>Home</CT.Nav>
                </CT.Menu>
            </CT.Center>
            <CT.Right>
                <BsSearch/>
                <BsBag/>
                <AiOutlineUser/>
            </CT.Right>
        </CT.Container>
    )
}