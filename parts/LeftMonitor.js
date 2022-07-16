import React from 'react';

export default function LeftMonitor(props) {
  const data = props.data;

  let arr = data.map((obj) => obj.value);

  let error = arr.filter((value) => {
    return value > 100;
  });

  let warning = arr.filter((value) => {
    return value >= 80 && value <= 100;
  });

  let jawab = error.length;
  let bahaya = warning.length;

  return (
    <div className="flex flex-col w-[25%] rounded-2xl h-auto bg-white p-6 shadow-xl shadow-gray-300">
      <p>Last Update</p>
      <p>14-05-2020 08:00 AM</p>
      <hr></hr>
      <p className="pt-3">Log Summary</p>
      <p>Last 24 Hours</p>

      <h3 className="pt-3">Data Transfer</h3>
      <div className="">
        <table>
          <thead>
            <tr>
              <th>Error</th>
              <th>Warning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{jawab}</td>
              <td>{bahaya}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="pt-3">Measurement</h3>
      <div className="">
        <table>
          <thead>
            <tr>
              <th>Error</th>
              <th>Warning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{jawab}</td>
              <td>{bahaya}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="pt-3">Device Health</h3>
      <div className="">
        <table>
          <thead>
            <tr>
              <th>Error</th>
              <th>Warning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{jawab}</td>
              <td>{bahaya}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
