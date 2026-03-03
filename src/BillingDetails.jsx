import React from 'react';
import './BillingDetails.css';

const BillingDetails = ({ data }) => {
  if (!data) return <p style={{ textAlign: 'center', color: '#999' }}>Awaiting data...</p>;

  const subtotal = data.qty * data.price;
  const tax = subtotal * 0.15;
  const total = subtotal + tax;
  const date = new Date().toLocaleString();

  return (
    <div className="receipt-container">
      <div className="receipt-header">
        <h3>ORDER SUMMARY</h3>
        <p>{date}</p>
        <p>Terminal #01</p>
      </div>

      <div className="receipt-section">
        <div className="receipt-row">
          <span>{data.name}</span>
          <span>${(data.qty * data.price).toFixed(2)}</span>
        </div>
        <div className="receipt-row" style={{ color: '#777', fontSize: '0.8rem' }}>
          <span>{data.qty} @ ${data.price.toFixed(2)}</span>
        </div>
      </div>

      <div className="receipt-section">
        <div className="receipt-row">
          <span>SUBTOTAL</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="receipt-row">
          <span>TAX (15%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="receipt-footer">
        <div className="receipt-total">
          <span>TOTAL</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="barcode">
        <div style={{ fontSize: '0.7rem', marginBottom: '5px' }}>THANK YOU FOR YOUR PURCHASE</div>
        {/* Simple visual barcode representation */}
        <div style={{ height: '30px', background: 'repeating-linear-gradient(90deg, #000, #000 2px, transparent 2px, transparent 4px)' }}></div>
      </div>
    </div>
  );
};

export default BillingDetails;
