import React from "react";
import { useState } from "react";
import "./card.css";
import SideBar from "./new";


function Cards() {
  // This is the product state
  const [order, setOrders] = useState([])
  const [product, setProduct] = useState([  


    {
      id: 1,
      name: "Reebook Funky Shoes for Men",
      price: 3999,
      quantity: 0,
      total: 0,
      image: "https://trase.in/cdn/shop/files/42139-BKWH-1.jpg?v=1749468869"
    },
    {
      id: 2,
      name: "Reebook Loofers for Womens",
      price: 2999,
      quantity: 0,
      total: 0,

      image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/665715a386f71d0024e3f9d7/women-shoes-black-1.jpg"
    },
    {
      id: 3,
      name: "Sparks Sports Shoes for mens",
      price: 4999,
      quantity: 0,
      total: 0,

      image: "https://redchief.in/cdn/shop/files/317_800x.png?v=1756061961"
    },
    {
      id: 4,
      name: "Jordan Air Shoes for mens (Black)",
      price: 2499,
      quantity: 0,
      total: 0,

      image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/25345394/2023/10/4/e8913b64-a87b-49e7-b685-80e9189865a51696425461509CasualShoes1.jpg"
    },
    {
      id: 5,
      name: "Bata party wear shoes for mens",
      price: 1999,
      quantity: 0,
      total: 0,

      image: "https://egoss.in/cdn/shop/files/EP-5410_BLACK.jpg?v=1753876169&width=2048"
    }

  ])
  // Increase Quantity and Price

  const increaseQuantity = (id) => {

    const updatedProduct = product.map((product) => {

      if (product.id === id) {

        const newQuantity = product.quantity + 1;

        const updatedItem = {
          ...product,
          quantity: newQuantity,
          total: newQuantity * product.price
        };

        // Only updated product
        // console.log(JSON.stringify(updatedItem, null, 2));

        return updatedItem;
      }

      return product;
    });

    setProduct(updatedProduct);
  };

  // Decrease Quantity and Price

  const decreaseQuantity = (id) => {

    const updatedProduct = product.map((product) => {

      if (product.id === id) {

        const newQuantity =
          product.quantity > 0
            ? product.quantity - 1
            : 0;

        const updatedItem = {
          ...product,
          quantity: newQuantity,
          total: newQuantity * product.price,
        };

        // console.log(JSON.stringify(updatedItem, null, 2));

        return updatedItem;
      }

      return product;
    });

    setProduct(updatedProduct);
  };



  // Reset Quantity
  const resetQuantity = (id) => {
    const updatedProduct = product.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: 0,
          total: 0
        };
      }
      return item;
    });

    setProduct(updatedProduct);
    // console.log(JSON.stringify(updatedProduct, null, 2))
  };

  //Delete Product

  const deleteProduct = (id) => {
  setProduct(
    product.map((item) =>
      item.id === id
        ? { ...item, quantity: 0, total: 0 }
        : item
    )
  );

  setOrders(
    order.filter((item) => item.id !== id)
  );
};

  //Buy Now

  const buyNow = async (id) => {

    const selectedProduct = product.find(
      (item) => item.id === id
    );

    if (!selectedProduct || selectedProduct.quantity === 0) {
      alert("Please add quantity first");
      return;
    }

    const cartItems = [{
      id: selectedProduct.id,
      name: selectedProduct.name,
      quantity: selectedProduct.quantity,
      total: selectedProduct.total,
    }];

    setOrders(cartItems);
    // console.log("abc" + "" + cartItems)





    try {

      const response = await fetch(
        "http://localhost:3001/product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderDate: new Date(),
            items: cartItems,
          }),
        }
      );

      const data = await response.json();

      // console.log("Saved Order:", data);

      alert("Order Saved Successfully");

    } catch (error) {

      // console.log("Error saving order:", error);

    }
  };

  const deleteOrderItem = (id) => {
    const updatedOrders = order.filter(
      (item) => item.id !== id
    );

    setOrders(updatedOrders);
  };




  return (

    <main className="cards-Main">
  {product.map((product) => (
    <div className="cards" key={product.id}>
      <img
        src={product.image}
        className="img card2"
        alt={product.name}
      />

      <h2>{product.name}</h2>

      <p>Rs-{product.price}</p>

      <div className="btn">
        <button
          className="btn-grad"
          onClick={() => buyNow(product.id)}
        >
          Buy Now
        </button>

        <button
          className="plus"
          onClick={() => increaseQuantity(product.id)}
        >
          +
        </button>

        <input
          type="text"
          className="quantity"
          value={product.quantity}
          readOnly
        />

        <button
          className="minus"
          onClick={() => decreaseQuantity(product.id)}
        >
          -
        </button>

        <button
          className="reset"
          onClick={() => resetQuantity(product.id)}
        >
          Reset
        </button>

        <button
          className="delete"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  ))}
{/* <h1>Order Summary</h1> */}

<SideBar
    order={order}
    setOrders={setOrders}
/>
</main>




    

  );

}

export default Cards