import { useState } from "react";

export default function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300",
    },
    {
      id: 2,
      name: "Phone",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300",
    },
    {
      id: 3,
      name: "Headset",
      price: 2000,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          background: "#222",
          color: "white",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>🛒 Mini Store</h2>
        <h2>Cart ({cart.length})</h2>
      </nav>

      {/* Products */}
      <div style={{ padding: "20px" }}>
        <h2>Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                width="150"
                height="150"
              />

              <h3>{product.name}</h3>
              <p>₹{product.price}</p>

              <button onClick={() => addToCart(product)}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart */}
      <div style={{ padding: "20px" }}>
        <h2>Cart Items</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  {item.name} - ₹{item.price}
                </p>

                <button onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            ))}

            <h3>Total = ₹{total}</h3>
          </>
        )}
      </div>
    </div>
  );
}