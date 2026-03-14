import React from 'react'
import './productlist.css'

function ProductList(){
    return(
        <div className="plcontainer">
            <h1>Product List</h1>
            <ul>
                <li className="product">Product 1</li>
                <li className="product">Product 2</li>
                <li className="product">Product 3</li>  
                <li className="product">Product 4</li>  
                <li className="product">Product 5</li>

            </ul>
        </div>
    )
}

export default ProductList