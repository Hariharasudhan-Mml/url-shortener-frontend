import React, { useState } from 'react';
import "./Dashboard.css"
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';



const Dashboard = ({items}) => {
  Chart.register(CategoryScale)
  Chart.register(LinearScale)
  Chart.register(BarElement)
  

  const [points, setPoints] = useState({
    labels: items.map((item) => item.shortURL),
    datasets: [
      {
        label: 'points table',
        data: items.map((item) => item.clicks),
        backgroundColor: ['red', 'green', 'blue'],
      },
    ],
  });
  return (
    <div className="dashboard">
      {items.length  ?   <Bar data={points} /> :<h2> No urls created</h2> }
     
    </div>
  );
};

export default Dashboard;
