import React, { useState } from 'react';
import './ProductDetails.css';

const ProductDetails = ({ onCalculate, onReset }) => {
  // Using empty strings for qty/price so the inputs start empty
  const [form, setForm] = useState({ name: '', qty: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ 
      ...prev, 
      [name]: name === 'name' ? value : value === '' ? '' : Number(value) 
    }));
  };

  const handleReset = () => {
    setForm({ name: '', qty: '', price: '' });
    onReset();
  };

  return (
    <div className="entry-card">
      <div className="input-group">
        <label>Product Name</label>
        <input 
          name="name" 
          placeholder="e.g. Organic Kale" 
          value={form.name} 
          onChange={handleChange} 
        />
      </div>

      <div className="input-group">
        <label>Quantity</label>
        <input 
          type="number" 
          name="qty" 
          placeholder="0"
          value={form.qty} 
          onChange={handleChange} 
        />
      </div>

      <div className="input-group">
        <label>Price per Unit ($)</label>
        <input 
          type="number" 
          name="price" 
          placeholder="0.00"
          value={form.price} 
          onChange={handleChange} 
        />
      </div>

      <div className="button-stack">
        <button 
          className="btn-calculate"
          onClick={() => onCalculate(form)} 
          disabled={!form.name || !form.qty || form.qty <= 0}
        >
          Calculate Total
        </button>
        <button className="btn-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
