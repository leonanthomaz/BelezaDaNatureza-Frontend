import React, { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Intro } from '../../components/Intro';
import { News } from '../../components/Containers/News';
import { Topbar } from '../../components/Topbar';
import * as H from './HomeStyles';
import { Top } from '../../components/Containers/Top';


export const Home = () => {
    return (
        <H.Container>
            <Topbar/>
            <Header/>
            <Intro/>
            <News/>
            <Top/>
        </H.Container>
    )
}
