import React, { useState } from 'react';
import './BuyNowModal.css';

const BuyNowModal = ({ nft, onClose }) => {
  const [amount, setAmount] = useState('');

  const handlePurchase = () => {
    alert(`You purchased ${nft.name} for ${amount}`);
    onClose(); // Close modal after purchase
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Purchase {nft.name}</h2>
        <img src={nft.imageUrl} alt={nft.name} />
        <p>Price: {nft.price}</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <button onClick={handlePurchase}>Confirm Purchase</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default BuyNowModal;
