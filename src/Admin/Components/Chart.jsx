import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const Chart = ({ crimeCategories, criminalsInCustody }) => {

  if(!crimeCategories) {
    return null
  }
  // Calculate crime category percentages based on crimeCategories prop
  const crimeCategoryCounts = {};

  crimeCategories.forEach(category => {
    const count = criminalsInCustody.filter(criminal => criminal.category === category).length;
    crimeCategoryCounts[category] = count;
  });

  const totalCrimes = Object.values(crimeCategoryCounts).reduce((total, count) => total + count, 0);

  const data = Object.entries(crimeCategoryCounts).map(([category, count]) => ({
    value: (count / totalCrimes) * 100,
    title: category,
    color: getRandomColor(),
  }));

  return (
    <div>
      <div className='Chart'>
        <PieChart
          data={data}
          lineWidth={100}
          label={({ dataEntry }) => `${dataEntry.value.toFixed(2)}% ${dataEntry.title}`}
          labelPosition={50}
          labelStyle={{
            fontSize: '4px',
            fontFamily: 'sans-serif',
            fill: 'white',
          }}
        />
      </div>
      <div className='legend'>
        {data.map((item, index) => (
          <div key={index} className='legend-item'>
            <div className='color-box' style={{ background: item.color }}></div>
            <div className='legend-text'>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


export default Chart;
