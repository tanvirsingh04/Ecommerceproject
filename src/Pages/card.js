
import React, { useState, useEffect } from "react";
import "./card.css";
import Table from "./SummaryTable";

function Cards() {
  const [productlist, setProductList] = useState([]);
  const [order, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // Fetch Products
  // ==========================================
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // FIX 1:
        // Use the actual URL, not Markdown formatting
        const response = await fetch(
          "http://localhost:9000/productlist"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        console.log("Products from server:", data);

        // Convert MongoDB data to frontend format
        const formattedProducts = data.map((item, i) => {
          console.log("Product", i, item);

          return {
            // MongoDB _id is converted to frontend id
            id: item._id,

            name: item.productName,
            description: item.productDes,
            price: Number(item.productPrice),
            quantity: 0,
            total: 0,
            image: item.productImage,
          };
        });

        console.log("Formatted Products:", formattedProducts);

        setProductList(formattedProducts);
      } catch (err) {
        console.error("Error loading products:", err);
        alert("Unable to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ==========================================
  // Increase Quantity
  // ==========================================
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
      })
    );
  };

  // ==========================================
  // Decrease Quantity
  // ==========================================
  const decreaseQuantity = (id) => {
    setProductList((prevProducts) =>
      prevProducts.map((item) => {
        if (item.id === id) {
          const newQuantity =
            item.quantity > 0 ? item.quantity - 1 : 0;

          return {
            ...item,
            quantity: newQuantity,
            total: newQuantity * item.price,
          };
        }

        return item;
      })
    );
  };

  // ==========================================
  // Reset Quantity
  // ==========================================
  const resetQuantity = (id) => {
    setProductList((prevProducts) =>
      prevProducts.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: 0,
              total: 0,
            }
          : item
      )
    );
  };

  // ==========================================
  // Delete Product
  // ==========================================
  const productdelete = async (id) => {
    console.log("Deleting product:", id);

    try {
      // FIX 2:
      // Correct DELETE URL
      const response = await fetch(
        `http://localhost:9000/productdelete/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete product");
      }

      // Remove product from UI
      setProductList((prevProducts) =>
        prevProducts.filter((item) => item.id !== id)
      );

      // Remove product from orders
      setOrders((prevOrders) =>
        prevOrders.filter((item) => item.id !== id)
      );

      alert(data.message);
    } catch (err) {
      console.error("Delete error:", err);
      alert("Unable to delete product.");
    }
  };

  // ==========================================
  // Add Product To Cart / Create Order
  // ==========================================
  const addToCart = async (id) => {
    const selectedProduct = productlist.find(
      (item) => item.id === id
    );

    if (!selectedProduct || selectedProduct.quantity === 0) {
      alert("Please add quantity first.");
      return;
    }

    // FIX 3:
    // Use selectedProduct.id, NOT selectedProduct._id
    //
    // We already converted:
    // id: item._id
    const cartItems = [
      {
        id: selectedProduct.id,
        name: selectedProduct.name,
        description: selectedProduct.description,
        quantity: selectedProduct.quantity,
        total: selectedProduct.total,
      },
    ];

    console.log("Cart Items:", cartItems);

    try {
      // FIX 4:
      // We are creating an ORDER,
      // therefore POST to /orders, not /productlist
      const response = await fetch(
        "http://localhost:9000/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderDate: new Date(),
            items: cartItems,
            status: "Pending",
          }),
        }
      );

      const data = await response.json();

      console.log("Order server response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Server Error");
      }

      // Add the successfully created order
      // to the order state
      setOrders((prevOrders) => [
        ...prevOrders,
        {
          ...data,
          status: "Pending",
        },
      ]);

      alert("Product added successfully");
    } catch (err) {
      console.error("Order error:", err);
      alert("Unable to save order.");
    }
  };

  // ==========================================
  // Delete Order Item
  // ==========================================
  const deleteOrderItem = (id) => {
    setOrders((prevOrders) =>
      prevOrders.filter((item) => item.id !== id)
    );
  };

  // ==========================================
  // Loading
  // ==========================================
  if (loading) {
    return <h2>Loading Products...</h2>;
  }

  // ==========================================
  // JSX
  // ==========================================
  return (
    <main className="cards-Main">
      {productlist.length === 0 ? (
        <h2>No Products Available</h2>
      ) : (
        productlist.map((product) => (
          <div className="cards" key={product.id}>
            <img
              src={product.image}
              className="img card2"
              alt={product.name}
            />

            <h2>{product.name}</h2>

            <h3 className="productDes">
              {product.description}
            </h3>

            <p>Rs - {product.price}</p>

            <div className="btn">
              {/* Add To Cart */}
              <button
                className="btn-grad"
                onClick={() => addToCart(product.id)}
              >
                Add To Cart
              </button>

              {/* Increase */}
              <button
                className="plus"
                onClick={() => increaseQuantity(product.id)}
              >
                +
              </button>

              {/* Quantity */}
              <input
                type="text"
                className="quantity"
                value={product.quantity}
                readOnly
              />

              {/* Decrease */}
              <button
                className="minus"
                onClick={() => decreaseQuantity(product.id)}
              >
                -
              </button>

              {/* Reset */}
              <button
                className="reset"
                onClick={() => resetQuantity(product.id)}
              >
                Reset
              </button>

              {/* Delete */}
              <button
                className="delete"
                onClick={() => {
                  console.log("Product:", product);
                  productdelete(product.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      <Table
        order={order}
        setOrders={setOrders}
        deleteOrderItem={deleteOrderItem}
      />
    </main>
  );
}

export default Cards;