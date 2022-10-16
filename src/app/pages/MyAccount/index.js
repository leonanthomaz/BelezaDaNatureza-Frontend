
import React, { useContext } from 'react'
import { AuthContext } from '../../share/contexts/auth'
import * as MA from './MyAccountStyles'

export const MyAccount = () => {
    const { logout } = useContext(AuthContext)
    return (
        <MA.Container>
           <h1>MyAccount</h1>
           <button onClick={logout}>Sair</button>
        </MA.Container>
    )
}
