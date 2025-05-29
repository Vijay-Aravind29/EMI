import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from './Api';
import "./Edit.css";

const Edit = () => {
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
    <form onSubmit={handleSubmit} className="edit-form">
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
      <button type="submit" className="submit-btn">Update</button>
    </form>
  );
};

export default Edit;