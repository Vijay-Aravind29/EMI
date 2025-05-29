import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from './Api';
import "./Home.css";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get('/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteEmployee = (id) => {
    api.delete(`/employees/${id}`)
      .then(() => setEmployees(employees.filter(e => e.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div className="home-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>
                <Link className="edit-btn" to={`/edit/${emp.id}`}>Edit</Link>
                <button className="delete-btn" onClick={() => deleteEmployee(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;