import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from './Api';
import "./Home.css"

export default function Home() {
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
    <div>
      <table className="w-full table-auto border">
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
            <tr key={emp.id} className="border-t">
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>
                <Link to={`/edit/${emp.id}`} className="text-blue-600">Edit</Link>
                <button onClick={() => deleteEmployee(emp.id)} className="text-red-600 ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
