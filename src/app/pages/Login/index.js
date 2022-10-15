
import React, { useContext, useRef } from 'react'
import * as L from './LoginStyles'
import { Topbar } from '../../components/Topbar'
import { Header } from '../../components/Header'
import { loginStart } from '../../share/api'
import { AuthContext } from '../../share/contexts/auth'

export const Login = () => {
    const { dispatch, error } = useContext(AuthContext)

    const email = useRef()
    const password = useRef()

    const handleClick = (e) => {
        e.preventDefault()
        loginStart(
            {email: email.current.value, password: password.current.value}, dispatch
        )
        window.location('/')
    }

    return (
        <L.Container>
            <Topbar/>
            <Header/>
            <L.Box>
                <h1>Login</h1>
                { error !== null ? <p style={{ color: 'red'}}>{error}</p> : ""}
                <L.Form onSubmit={handleClick}>
                    <L.Input placeholder='email' ref={email}/>
                    <L.Input placeholder='senha' ref={password}/>
                    <L.Button type="submit">Enviar</L.Button>
                </L.Form>
            </L.Box>
        </L.Container>
    )
}
