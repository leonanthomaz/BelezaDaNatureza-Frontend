import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    let teste = "Meu saco"

    return(
        <CartContext.Provider value={{ teste }}>
            {children}
        </CartContext.Provider>
    )
}
