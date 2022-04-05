import { createContext } from "react";

export const CartContext = createContext([])

const CardProvider = ({children}) =>{
    const data = {}
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CardProvider