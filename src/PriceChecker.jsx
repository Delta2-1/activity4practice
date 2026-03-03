import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import BillingDetails from './BillingDetails';
import './PriceChecker.css';

const PriceChecker = () => {
  const [bill, setBill] = useState(null);

  return (
    <div className="market-app">
      <div className="market-dashboard">
        {/* Top Header Section */}
        <header className="header-area">
          <h1>GreenMarket <span style={{fontWeight: 400, color: '#94a3b8'}}>v2.6</span></h1>
        </header>
        
        {/* Left: Input Console */}
        <main className="input-console">
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Product Entry</h2>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Enter item details to generate a digital invoice.</p>
          </div>
          <ProductDetails 
            onCalculate={(data) => setBill(data)} 
            onReset={() => setBill(null)} 
          />
        </main>

        {/* Right: Floating Receipt Sidebar */}
        <aside className="receipt-sidebar">
          <BillingDetails data={bill} />
          {!bill && (
            <div style={{ 
              marginTop: '20px', 
              padding: '20px', 
              background: '#f8fafc', 
              borderRadius: '12px',
              border: '1px dashed #e2e8f0',
              textAlign: 'center',
              color: '#94a3b8',
              fontSize: '0.85rem'
            }}>
              Your digital receipt will appear here after calculation.
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default PriceChecker;
