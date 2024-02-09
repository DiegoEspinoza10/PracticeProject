import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEmployees(data);
      });
  }, []);
  return (
    <div>
        <h4>Data fetched from API</h4>
      {employees.map((employees) => (
        <div key={employees.id}>
          <p>{employees.name}</p>
          <p>{employees.email}</p>
        </div>
      ))}
    </div>
  );
};
export default Fetch;
