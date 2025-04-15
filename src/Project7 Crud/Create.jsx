import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './Api';
import "./Create.css"
export default function Create() {
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {['name', 'position', 'department', 'salary'].map(field => (
        <div key={field}>
          <label className="block capitalize">{field}</label>
          <input
            name={field}
            value={form[field]}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
    </form>
  );
}

