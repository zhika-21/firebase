import {useContext} from 'react'
import Product from './Product'
import {FirestoreContext} from '../../contex/GeneralFireStore'
function AllProducts(){
    const {allProducts} = useContext(FirestoreContext)
    return(
        <>
        <h1>this are my products</h1>
        {
            allProducts.map((product)=>(
                <Product id={product.id} data={product.data}/>
            ))
        }
        </>

    )
}

export default AllProducts