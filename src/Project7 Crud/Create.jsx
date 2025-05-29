import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './Api';
import "./Create.css";

const Create = () => {
  const [form, setForm] = useState({ name: '', position: '', department: '', salary: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api.post('/employees', { ...form, salary: parseInt(form.salary) })
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="create-form">
      {['name', 'position', 'department', 'salary'].map(field => (
        <div key={field} className="form-group">
          <label className="form-label">{field}</label>
          <input
            name={field}
            value={form[field]}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
      ))}
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default Create;