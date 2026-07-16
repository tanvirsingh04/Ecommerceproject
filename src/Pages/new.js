import React, { useState } from "react";
import './new.css'
import Cards from "./card";


function SideBar({ order, setOrders }) {
    const deleteProduct = (id) => {
        const updatedOrders = order.filter(
            (items) => items.id !== id
        )
        setOrders(updatedOrders);
        console.log("xyz", updatedOrders)
    }
    return (
        <main className="table-Main">
            <div className="Container">
                <h1>Order Summary</h1>

                <table>

                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>

                        {order.map((items, index) => (

                            <tr key={items.id}>
                                <td>{items.name}</td>
                                <td>{items.quantity}</td>
                                <td>₹ {items.total}</td>
                                <td><button className="button-13" onClick={() => deleteProduct(items.id)}>
                                    Delete
                                </button></td>
                            </tr>
                        ))}
                    </tbody>





                </table>
            </div>
        </main>
    );


}

export default SideBar