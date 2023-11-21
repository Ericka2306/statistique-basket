import React, { useEffect, useState } from 'react';
import './styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const StatsTable = () => {
  const [data, setData] = useState([]);
   
  useEffect(() => {
    fetch('https://192.168.8.26/joueur')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Statistiques</h2>
      <table table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Joueur</th>
            <th scope="col">Passe-D</th>
            <th scope="col">B-perdue</th>
            <th scope="col">Interception</th>
            <th scope="col">Contre</th>
            <th scope="col">Faute</th>
            <th scope="col">Tir</th>
            <th scope="col">3P</th>
            <th scope="col">LF</th>
            <th scope="col">RBD O</th>
            <th scope="col">RBD D</th>
          </tr>
          
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;
