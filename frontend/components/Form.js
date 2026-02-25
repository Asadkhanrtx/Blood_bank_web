import { useState } from 'react';

export default function Form({ endpoint }) {
  const [formData, setFormData] = useState({
    name: '', dob: '', weight: '', blood_type: '', consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:8000${endpoint}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    alert("Submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="dob" type="date" onChange={handleChange} />
      <input name="weight" type="number" placeholder="Weight" onChange={handleChange} />
      <input name="blood_type" placeholder="Blood Type" onChange={handleChange} />
      <label>
        <input name="consent" type="checkbox" onChange={handleChange} /> Consent
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
