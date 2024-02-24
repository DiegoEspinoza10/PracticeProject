import React, { useState, useEffect } from 'react';

const Fetch = () => {

  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const parsedData = await data.json();
      setEmployees(parsedData);
    };
    fetchData();
  }, []);

  return (
    <div>
        <h4>Data fetched from API</h4>
      {employees.map((employees) => (
        <div key={employees.email}>
          <p>{employees.name}</p>
          <p>{employees.email}</p>
        </div>
      ))}
    </div>
  );
};
export default Fetch;
