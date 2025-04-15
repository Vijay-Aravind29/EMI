import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from './Api';
import "./Edit.css"
export default function Edit() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', position: '', department: '', salary: '' });
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/employees/${id}`)
      .then(res => setForm(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api.put(`/employees/${id}`, { ...form, salary: parseInt(form.salary) })
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
      <button type="submit" className="bg-green-500 text-white px-4 py-2">Update</button>
    </form>
  );
}
