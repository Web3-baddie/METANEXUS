import React, { useState } from 'react';
import './MetaMall.css';
import BuyNowModal from './BuyNowModal';
import AuctionModal from './AuctionModal'; // Import AuctionModal
import SwapModal from './SwapModal';       // Import SwapModal

const nfts = [
  {
    id: 1,
    name: "Crypto Art #1",
    price: "0.5 ETH",
    imageUrl: "https://i.pinimg.com/236x/3e/e9/74/3ee974bf86d7c5838985236fbe0e5865.jpg",
  },
  {
    id: 2,
    name: "Crypto Art #2",
    price: "1.2 ETH",
    imageUrl: "https://example.com/nft2.jpg",
  },
  {
    id: 3,
    name: "Crypto Art #3",
    price: "0.8 ETH",
    imageUrl: "https://example.com/nft3.jpg",
  },
  {
    id: 4,
    name: "Crypto Art #4",
    price: "1.5 ETH",
    imageUrl: "https://example.com/nft4.jpg",
  },
  {
    id: 5,
    name: "Crypto Art #5",
    price: "0.3 ETH",
    imageUrl: "https://example.com/nft5.jpg",
  },
  {
    id: 6,
    name: "Crypto Art #6",
    price: "2.0 ETH",
    imageUrl: "https://example.com/nft6.jpg",
  },
  {
    id: 5,
    name: "Crypto Art #5",
    price: "0.3 ETH",
    imageUrl: "https://example.com/nft5.jpg",
  },
  {
    id: 5,
    name: "Crypto Art #5",
    price: "0.3 ETH",
    imageUrl: "https://example.com/nft5.jpg",
  },
  {
    id: 5,
    name: "Crypto Art #5",
    price: "0.3 ETH",
    imageUrl: "https://example.com/nft5.jpg",
  },
  {
    id: 5,
    name: "Crypto Art #5",
    price: "0.3 ETH",
    imageUrl: "https://example.com/nft5.jpg",
  },
  {
    id: 5,
    name: "Crypto Art #5",
    price: "0.3 ETH",
    imageUrl: "https://example.com/nft5.jpg",
  },
];

const MetaMall = () => {
  const [selectedNft, setSelectedNft] = useState(null);
  const [isAuctionOpen, setIsAuctionOpen] = useState(false);
  const [isSwapOpen, setIsSwapOpen] = useState(false);

  const openBuyNowModal = (nft) => {
    setSelectedNft(nft);
  };

  const closeBuyNowModal = () => {
    setSelectedNft(null);
  };

  const openAuctionModal = (nft) => {
    setSelectedNft(nft);
    setIsAuctionOpen(true);
  };

  const closeAuctionModal = () => {
    setIsAuctionOpen(false);
    setSelectedNft(null);
  };

  const openSwapModal = (nft) => {
    setSelectedNft(nft);
    setIsSwapOpen(true);
  };

  const closeSwapModal = () => {
    setIsSwapOpen(false);
    setSelectedNft(null);
  };

  return (
    <div className="meta-mall">
      <h1>MetaMall</h1>
      <div className="nft-grid">
        {nfts.map(nft => (
          <div className="nft-card" key={nft.id}>
            <img src={nft.imageUrl} alt={nft.name} />
            <h3>{nft.name}</h3>
            <p>Price: {nft.price}</p>
            
            <button onClick={() => openAuctionModal(nft)}>Auction</button>
            <button onClick={() => openSwapModal(nft)}>Swap</button>
          </div>
        ))}
      </div>

      {selectedNft && (
        <BuyNowModal nft={selectedNft} onClose={closeBuyNowModal} />
      )}
      {isAuctionOpen && (
        <AuctionModal nft={selectedNft} onClose={closeAuctionModal} />
      )}
      {isSwapOpen && (
        <SwapModal nft={selectedNft} onClose={closeSwapModal} />
      )}
    </div>
  );
};

export default MetaMall;
