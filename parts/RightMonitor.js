import React from 'react';
import { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

function RightMonitor(props) {
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
    <div className="flex flex-col w-[75%] rounded-2xl h-auto bg-white shadow-xl shadow-gray-300 p-6">
      <div className="w-full flex justify-between">
        <div className="w-1/3">
          <p className="text-3xl">pH</p>
          <p className="text-5xl">7</p>
          <div className="pt-3">
            <table>
              <tbody>
                <tr>
                  <th>Unit ID</th>
                  <td>01</td>
                </tr>
                <tr>
                  <th>Device ID</th>
                  <td>SW-02</td>
                </tr>
                <tr className="mt-12">
                  <th>Min</th>
                  <td>4</td>
                </tr>
                <tr>
                  <th>Max</th>
                  <td>9</td>
                </tr>
                <tr>
                  <th>Median</th>
                  <td>6.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col w-2/3">
          <div className="flex w-full">
            <div className="flex w-1/2"></div>
            <div className="flex w-1/2">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              ></label>
              <select
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option defaultValue>Choose a date</option>
                <option value="US">One Days Ago</option>
                <option value="CA">Two Days Ago</option>
                <option value="FR">Three Days Ago</option>
                <option value="DE">Four Days Ago</option>
              </select>
            </div>
          </div>
          <Chart
            type="line"
            data={userData}
            id="myChart"
            options={{
              borderColor: '#3f51b5',
              borderJoinStyle: 'round',
              pointBackgroundColor: '#3f51b5',
              borderWidth: 2,
              backgroundColor: '#fff',
              scales: {
                yAxisID: [
                  {
                    ticks: {
                      beginAtZero: true,
                      max: 200,
                      min: 0,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightMonitor;