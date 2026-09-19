import React, { useState, useEffect } from "react";
import "./card.css";
import Table from "./SummaryTable";

function Cards() {
  const [productlist, setProductList] = useState([]);
  const [order, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProducts()
  }, []);
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:9000/productlist");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      console.log(data);

      // ============================
      // ===== CHANGED =====
      // Convert backend data into frontend format
      // ============================
      const formattedProducts = data.map((item, i) => {
        console.log("k123" + i, item);

        return {
          id: item._id,
          name: item.productName,
          description: item.productDes,
          price: Number(item.productPrice),
          quantity: 0,
          total: 0,
          image: item.productImage,
        };
      });

      console.log("FD", formattedProducts);

      setProductList(formattedProducts);
    } catch (err) {
      // ============================
      // ===== CHANGED =====
      // Better error handling
      // ============================
      console.error("Error loading products:", err);
      alert("Unable to load products.");
    } finally {
      // ============================
      // ===== NEW =====
      // Stop loading
      // ============================
      setLoading(false);
    }
  }; // ============================
  // ===== CHANGED =====
  // Increase Quantity
  // Uses functional state update
  // ============================
  const increaseQuantity = (id) => {
    setProductList((prevProducts) =>
      prevProducts.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + 1;

          return {
            ...item,
            quantity: newQuantity,
            total: newQuantity * item.price,
          };
        }

        return item;
      }),
    );
  };

  // ============================
  // ===== CHANGED =====
  // Decrease Quantity
  // Uses functional state update
  // ============================
  const decreaseQuantity = (id) => {
    setProductList((prevProducts) =>
      prevProducts.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity > 0 ? item.quantity - 1 : 0;

          return {
            ...item,
            quantity: newQuantity,
            total: newQuantity * item.price,
          };
        }

        return item;
      }),
    );
  };

  // ============================
  // ===== CHANGED =====
  // Reset Quantity
  // Uses functional state update
  // ============================
  const resetQuantity = (id) => {
    setProductList((prevProducts) =>
      prevProducts.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: 0,
              total: 0,
            }
          : item,
      ),
    );
  };

  // ============================
  // ===== CHANGED =====
  // Delete Product
  // Deletes from backend + frontend
  // ============================
  const productdelete = async (id) => {
    console.log(id);
    try {
      const response = await fetch(
        `http://localhost:9000/productdelete/${id}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      // ============================
      // ===== NEW =====
      // Check if delete succeeded
      // ============================
      if (!response.ok) {
        throw new Error(data.message);
      }

      // ============================
      // ===== CHANGED =====
      // Remove product from UI
      // ============================
      setProductList((prevProducts) =>
        prevProducts.filter((item) => item.id !== id),
      );

      // ============================
      // ===== CHANGED =====
      // Remove product from orders
      // ============================
      setOrders((prevOrders) => prevOrders.filter((item) => item.id !== id));

      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Unable to delete product.");
    }
  };

  // ============================
  // ===== CHANGED =====
  // Buy Now
  // Better error handling
  // ============================
  const addToCart = async (id) => {
    // if (!loggedInUser){
    //   alert("Please loggin first to add product to cart")
    //   return
    // }
    const selectedProduct = productlist.find((item) => item.id === id);


    if (!selectedProduct || selectedProduct.quantity === 0) {
      alert("Please add quantity first.");
      return;
    }

    const cartItems = [
      {
        id: selectedProduct._id,
        name: selectedProduct.name,
        description: selectedProduct.description,
        quantity: selectedProduct.quantity,
        total: selectedProduct.total,
      },
    ];

    console.log(cartItems);

    // ============================
    // ===== SAME =====
    // Save order in sidebar
    // ============================
    setOrders(cartItems);

    try {
      const response = await fetch("http://localhost:9000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // userId : loggedInUser._id,
          // userName : loggedInUser.name,
          // userEmail : loggedInUser.email,
          orderDate: new Date(),
          items: cartItems,
          status: "Pending",
        }),
      });

      const data = await response.json();

      console.log(data);

      // ============================
      // ===== NEW =====
      // Check server response
      // ============================
      if (!response.ok) {
        console.log("server return:", data);

        throw new Error("Server Error");
      }

      setOrders((prevOrders) => [
        ...prevOrders,
        {
          ...data,
          status: "Pending",
        },
      ]);

      alert("Product added succefully");
    } catch (err) {
      console.error(err);
      alert("Unable to save order.");
    }
  };

  // ============================
  // ===== CHANGED =====
  // Delete Order Item
  // Uses functional state update
  // ============================
  const deleteOrderItem = (id) => {
    setOrders((prevOrders) => prevOrders.filter((item) => item.id !== id));
  }; // ============================
  // ===== NEW =====
  // Show loading while fetching products
  // ============================
  if (loading) {
    return <h2>Loading Products...</h2>;
  }

  return (
    <main className="cards-Main">
      {/* ============================
          ===== NEW =====
          Show message if no products
      ============================ */}
      {productlist.length === 0 ? (
        <h2>No Products Available</h2>
      ) : (
        productlist.map((product) => (
          <div className="cards" key={product.id}>
            <img src={product.image} className="img card2" alt={product.name} />

            <h2>{product.name}</h2>

            <h3 className="productDes">{product.description}</h3>

            <p>Rs - {product.price}</p>

            <div className="btn">
              <button
                className="btn-grad"
                onClick={() => addToCart(product.id)}
                  // disabled = {!loggedInUser}
                
              >
                Add To Cart
                {/* {loggedInUser ? "Add To Cart" : "Loggin to Add"} */}
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
                onClick={() => {
                  console.log(product);
                  productdelete(product.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      {/* ============================
          ===== CHANGED =====
          Pass deleteOrderItem function
          to SideBar
      ============================ */}

      <Table
        order={order}
        setOrders={setOrders}
        deleteOrderItem={deleteOrderItem}
      />
    </main>
  );
}

export default Cards;
