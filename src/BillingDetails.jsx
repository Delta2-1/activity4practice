const BillingDetails = ({ data }) => {
  if (!data) return <p style={{ color: '#666' }}>Waiting for calculation...</p>;

  const subtotal = data.qty * data.price;
  const tax = subtotal * 0.15;

  return (
    <div style={{ marginTop: '20px', border: '2px dashed #ccc', padding: '15px' }}>
      <h3 style={{ margin: '0 0 10px 0' }}>🧾 Invoice</h3>
      <p><b>Item:</b> {data.name}</p>
      <p><b>Unit:</b> ${data.price.toFixed(2)} x {data.qty}</p>
      <hr />
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Tax (15%): ${tax.toFixed(2)}</p>
      <h2 style={{ color: '#28a745' }}>Total: ${(subtotal + tax).toFixed(2)}</h2>
    </div>
  );
};

export default BillingDetails;
