import React, { useState } from 'react';
import './SwapModal.css';

const SwapModal = ({ nft, onClose }) => {
  const [swapNFT, setSwapNFT] = useState('');

  const handleSwap = () => {
    alert(`You are swapping ${nft.name} for ${swapNFT}`);
    onClose(); // Close modal after swapping
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Swap {nft.name}</h2>
        <img src={nft.imageUrl} alt={nft.name} />
        <input
          type="text"
          value={swapNFT}
          onChange={(e) => setSwapNFT(e.target.value)}
          placeholder="Enter NFT to swap with"
        />
        <button onClick={handleSwap}>Confirm Swap</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default SwapModal;
