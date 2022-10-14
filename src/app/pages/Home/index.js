
import React from 'react'
import * as H from './HomeStyles'
import { Topbar } from '../../components/Topbar'
import { Header } from '../../components/Header'
import { Intro } from '../../components/Intro'
import { Emphasis } from '../../components/Emphasis'
import { Footer } from '../../components/Footer'
import { News } from '../../components/News'

export const Home = () => {

    return (
        <H.Container>
            <Topbar/>
            <Header/>
            <Intro/>
            <Emphasis/>
            <News/>
            <Footer />
        </H.Container>
    )
}
