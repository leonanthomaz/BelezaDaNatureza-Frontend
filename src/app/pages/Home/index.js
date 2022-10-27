
import React from 'react'
import * as H from './HomeStyles'
import { Topbar } from '../../components/Topbar'
import { Header } from '../../components/Header'
import { Intro } from '../../components/Intro'
import { Emphasis } from '../../components/Emphasis'
import { Footer } from '../../components/Footer'
import { News } from '../../components/News'
import background_bird from '../../share/assets/img/passaros.png'

export const Home = () => {

    return (
        <H.Container>
            <Topbar/>
            <Header/>
            <Intro/>
            {/* <H.BirdContainer style={{ backgroundImage: `url(${background_bird})`}}>

            </H.BirdContainer> */}
            <Emphasis/>
            <News/>
            <Footer />
        </H.Container>
    )
}
