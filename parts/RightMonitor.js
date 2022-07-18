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
    <div className="flex flex-col w-full md:w-[75%] rounded-2xl h-auto bg-white shadow-xl shadow-gray-300 p-6">
      <div className="w-full flex justify-between">
        <div className="flex flex-col">
          <p className="text-3xl">pH</p>
          <p className="text-5xl">7</p>
        </div>

        <div className="flex w-1/3 h-11">
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

      <div className="flex flex-col-reverse md:flex-row w-full h-auto justify-between">
        <div className="pt-3 w-full md:w-[20%]">
          <table className="flex w-full md:mx-0">
            <tbody className="flex md:flex-col w-full gap-x-6 mx-auto flex-wrap">
              <tr className="flex flex-col md:flex-row justify-between">
                <th>Unit ID</th>
                <td>01</td>
              </tr>
              <tr className="flex flex-col md:flex-row justify-between">
                <th>Device ID</th>
                <td>SW-02</td>
              </tr>
              <tr className="flex flex-col md:flex-row justify-between mt-0 md:mt-32">
                <th>Min</th>
                <td>4</td>
              </tr>
              <tr className="flex flex-col md:flex-row justify-between">
                <th>Max</th>
                <td>9</td>
              </tr>
              <tr className="flex flex-col md:flex-row justify-between">
                <th>Median</th>
                <td>6.8</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-[75%]">
          <Chart
            type="line"
            data={userData}
            id="myChart"
            width={100}
            height={40}
            options={{
              borderColor: '#3f51b5',
              borderJoinStyle: 'round',
              pointBackgroundColor: '#3f51b5',
              borderWidth: 2,
              backgroundColor: '#fff',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightMonitor;
