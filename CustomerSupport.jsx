import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomerSupport() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { sender: "You", text: input }]);
    setInput("");

    // Optional automated reply
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "Support", text: "We will help you shortly." }]);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "30px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center" }}>Customer Support</h2>

      <div style={{ height: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button onClick={sendMessage} style={{ padding: "8px 16px", borderRadius: "6px", backgroundColor: "#1976D2", color: "white", border: "none" }}>
          Send
        </button>
      </div>

      <button
        onClick={() => navigate("/cart")}
        style={{ marginTop: "15px", padding: "10px 20px", borderRadius: "6px", backgroundColor: "#FF5722", color: "white", border: "none", cursor: "pointer" }}
      >
        Back to Cart
      </button>
    </div>
  );
}

export default CustomerSupport;
