import { useState } from "react";

export default function App() {
  const products = [
    {
      id: 1,
      name: "Women Dress",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300",
    },
    {
      id: 2,
      name: "Hand Bag",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300",
    },
    {
      id: 3,
      name: "High Heels",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300",
    },
    {
      id: 4,
      name: "Makeup Kit",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = () => {
    if (cart.length > 0) {
      setCart(cart.slice(0, -1));
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>
        Girls Fashion Store 🛍️
      </h1>

      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h2>🛒 Cart Items: {cart.length}</h2>
        <h3>Total: ₹{totalPrice}</h3>

        <button
          onClick={removeFromCart}
          style={{
            padding: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Remove Item
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              width: "220px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "10px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}