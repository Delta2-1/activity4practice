import React, { useState } from 'react';

const ProductDetails = ({ onCalculate, onReset }) => {
  const [form, setForm] = useState({ name: '', qty: "", price: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'name' ? value : Number(value) }));
  };

  return (
    <div style={{ background: '#14af95a1', padding: '15px', borderRadius: '8px' }}>
      <h3>🛒 Item Entry</h3>
      <div style={{ marginBottom: '10px' }}>
        <label>Name: </label>
        <input name="name" value={form.name} onChange={handleChange} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Qty: </label>
        <input type="number" name="qty" value={form.qty} onChange={handleChange} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Price: </label>
        <input type="number" name="price" value={form.price} onChange={handleChange} />
      </div>
      <button onClick={() => onCalculate(form)} disabled={!form.name || form.qty <= 0}>Calculate</button>
      <button onClick={() => { setForm({name:'', qty:0, price:0}); onReset(); }} style={{ marginLeft: '5px' }}>Reset</button>
    </div>
  );
};

export default ProductDetails;
