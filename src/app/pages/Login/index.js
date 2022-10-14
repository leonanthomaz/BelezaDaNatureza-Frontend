
import React from 'react'
import * as L from './LoginStyles'
import { Topbar } from '../../components/Topbar'
import { Header } from '../../components/Header'

export const Login = () => {
    return (
        <L.Container>
            <Topbar/>
            <Header/>
            <L.Box>
                <h1>Login</h1>
                <L.Form>
                    <L.Input placeholder='email'/>
                    <L.Input placeholder='senha'/>
                    <L.Button>Enviar</L.Button>
                </L.Form>
            </L.Box>
        </L.Container>
    )
}
