import React from 'react';
import { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import LeftMonitor from './LeftMonitor';
import Volume from './Volume';
import RightMonitor from './RightMonitor';
// import { UserData } from '../data/data';

function Monitor(props) {
  let data = props.data;

  let dataChart = props.numberChart;

  // console.log(dataChart);

  let raw = data.map((element) => ({
    ...element,
    number: dataChart,
  }));

  let [userData, setUserData] = useState({
    labels: raw.map((data) => data.value),
    datasets: [
      {
        label: 'Users Gained',
        data: raw.map((data) => data.value),
      },
    ],
  });

  // useEffect(() => {
  //   let ctx = document.getElementById('myChart').getContext('2d');
  // }, []);

  // function update() {
  //   let ini = userData;
  //   ini.datasets[0].data[5] = numberChart;
  //   ini.update();
  // }

  return (
    <>
      <selection>
        <div className="flex flex-col-reverse md:flex-row justify-between max-w-7xl mx-auto pt-16 gap-x-8 gap-y-4 md:gap-y-0">
          <LeftMonitor data={data} />
          <RightMonitor data={data} />
        </div>
      </selection>
      {/* <Volume data={data} setNumbersChart={handleClick} /> */}
    </>
  );
}

export default Monitor;
