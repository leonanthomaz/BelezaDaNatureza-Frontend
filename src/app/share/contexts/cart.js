import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [ list, setList ] = useState([])
    // console.log('list=>', list)

    useEffect(()=>{
        const loadData = async () => {
            await axios.get('http://localhost:5000/products').then((response)=>{
                // console.log(response.data)
                setList(response.data)
            }).catch((error)=>{
                console.log(error)
            })
        }
        loadData()
    },[])

    const addCart = (id) => {
        // console.log('Função no contexto: ', id)
        const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
        const copyProductsCart = cartLocalStorage ? [...cartLocalStorage] : []
        const item = copyProductsCart.find((product) => product.id === id);
        if(!item){
            copyProductsCart.push({ 
            id: id,
            qtd: 1, 
            });
        }else{
            item.qtd = item.qtd + 1;
        }
        localStorage.setItem('cart', JSON.stringify(copyProductsCart))
    }


    return(
        <CartContext.Provider value={{ addCart }}>
            {children}
        </CartContext.Provider>
    )
}
