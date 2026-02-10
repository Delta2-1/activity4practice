import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import BillingDetails from './BillingDetails';

const PriceChecker = () => {
  const [bill, setBill] = useState(null);

  return (
    <div>
      <h1>Price Checker</h1>
      <ProductDetails 
        onCalculate={(data) => setBill(data)} 
        onReset={() => setBill(null)} 
      />
      <hr />
      <BillingDetails data={bill} />
    </div>
  );
};

export default PriceChecker;
