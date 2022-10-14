
import React from 'react'
import * as H from './HomeStyles'
import { Header } from '../../components/Header'
import { Categories } from '../../components/Categories'
import { Intro } from '../../components/Intro'
import { Emphasis } from '../../components/Emphasis'
import { Footer } from '../../components/Footer'

export const Home = () => {
    return (
        <H.Container>
            <Header/>
            <Categories/>
            <Intro/>
            <Emphasis/>
            <Footer />
        </H.Container>
    )
}
