import './SummaryTable.css'


function Table({ order, setOrders }) {
    const deleteProduct = (id) => {
        const updatedOrders = order.filter(
            (items) => items.id !== id
        )
        setOrders(updatedOrders);
        // console.log("xyz", updatedOrders)
    }
    const addToCart = (items) =>{
       console.log(items)
      alert ("Order Placed")
        
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
                            <th>Add To Cart</th>
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
                                <td><button className='button-3' onClick={()=> addToCart(items)}>Buy Now</button></td>
                            </tr>
                        ))}
                    </tbody>





                </table>
            </div>
        </main>
    );


}

export default Table;