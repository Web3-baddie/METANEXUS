import React, { useState } from 'react';
import './AuctionModal.css';

const AuctionModal = ({ nft, onClose }) => {
  const [bidAmount, setBidAmount] = useState('');

  const handleBid = () => {
    alert(`You placed a bid of ${bidAmount} on ${nft.name}`);
    onClose(); // Close modal after bidding
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Auction for {nft.name}</h2>
        <img src={nft.imageUrl} alt={nft.name} />
        <p>Current Bid: {nft.currentBid}</p>
        <input
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          placeholder="Enter bid amount"
        />
        <button onClick={handleBid}>Place Bid</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AuctionModal;
