import React, { useState } from 'react';

const SmartphoneExample = () => {
  // Instead of using multiple useState hooks, we manage the smartphone state in a single object
  const [smartphone, setSmartphone] = useState({
    brand: "Apple",
    model: "iPhone 14",
    color: "black",
    storage: "128GB",
  });

  const upgradeStorage = () => {
    setSmartphone((prev) => {
      return { ...prev, storage: "512GB" };
    });
  };

  return (
    <div>
      <h1>My {smartphone.brand}</h1>
      <h3>
        It's a {smartphone.color} {smartphone.model} with {smartphone.storage} of storage.
      </h3>
      <button onClick={upgradeStorage}>Upgrade Storage</button>
    </div>
  );
};

export default SmartphoneExample;
