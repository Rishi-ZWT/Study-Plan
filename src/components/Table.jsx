import React, { useState } from "react";

const Table = () => {
  // const tableData = [{id: 1, option: "Table"},{id: 2, option: "Table"}];

  // const [selectedOptions, setSelectedOptions] = useState({});

  // Function to handle select changes
  // const handleSelectChange = (id, selectedValue) => {
  //   setSelectedOptions(prevState => ({ ...prevState, [id]: selectedValue }));
  // };

  //   var timeArray = [];
  //   var d = new Date();
  //   var h = d.setHours(1);
  //   var m = d.getMinutes();

  //   for (var i = h; i <= 24; i++) {
  //     for (var j = m; j <= 59; j++) {
  //       if (j % 15 === 0) {
  //         j = j === 0 ? "00" : j;
  //         if (i >= 12) {
  //           timeArray.push(i - 12 + ":" + j + " PM");
  //         } else {
  //           timeArray.push(i + ":" + j + " AM");
  //         }
  //       }
  //     }
  //   }
  //   console.log(timeArray)
  // const [val, setVal] = useState("");
  // const starTime = [];
  // const getTime = [];
  // const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // const handleTime = () => {};
  // const handleSelectChange = () => {};

  const [timeField, setTimeField] = useState([]);
  const handleTimeSunday = (e) => {
    e.preventDefault();
    setTimeField([...timeField, [{ startTime: "" }, { endTime: "" }]]);
    console.log(timeField);
  };
  const handleTimeMonday = (e) => {
    e.preventDefault();
    setTimeField([...timeField, [{ startTime: "" }, { endTime: "" }]]);
    console.log(timeField);
  };
  const handleTimeWednesday = (e) => {
    e.preventDefault();
    setTimeField([...timeField, [{ startTime: "" }, { endTime: "" }]]);
    console.log(timeField);
  };
  const handleTimeThursday = (e) => {
    e.preventDefault();
    setTimeField([...timeField, [{ startTime: "" }, { endTime: "" }]]);
    console.log(timeField);
  };
  const handleTimeTuesday = (e) => {
    e.preventDefault();
    setTimeField([...timeField, [{ startTime: "" }, { endTime: "" }]]);
    console.log(timeField);
  };
  const handleTimeFriday = (e) => {
    e.preventDefault();
    setTimeField([...timeField, [{ startTime: "" }, { endTime: "" }]]);
    console.log(timeField);
  };
  const handleTimeSaturday = (e) => {
    e.preventDefault();
    setTimeField([...timeField, [{ startTime: "" }, { endTime: "" }]]);
    console.log(timeField);
  };
  return (
    <div>
      <div className="flex relative items-center justify-center overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sunday
              </th>
              <th scope="col" className="px-6 py-3">
                Monday
              </th>
              <th scope="col" className="px-6 py-3">
                Tuesday
              </th>
              <th scope="col" className="px-6 py-3">
                Wednesday
              </th>
              <th scope="col" className="px-6 py-3">
                Thursday
              </th>
              <th scope="col" className="px-6 py-3">
                Friday
              </th>
              <th scope="col" className="px-6 py-3">
                Saturday
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-14">
                <div className="overflow-y-auto max-h-32 ">
                  <select>
                    <option value="">Start time</option>
                    <option></option>
                  </select>
                  <br />
                  <select>
                    <option value="">End time</option>
                    <option></option>
                  </select>
                </div>
              </td>
              <td className="px-6 py-14"><div className="overflow-y-auto max-h-32 ">
                  <select>
                    <option value="">Start time</option>
                    <option></option>
                  </select>
                  <br />
                  <select>
                    <option value="">End time</option>
                    <option></option>
                  </select>
                </div></td>
              <td className="px-6 py-14"><div className="overflow-y-auto max-h-32 ">
                  <select>
                    <option value="">Start time</option>
                    <option></option>
                  </select>
                  <br />
                  <select>
                    <option value="">End time</option>
                    <option></option>
                  </select>
                </div></td>
              <td className="px-6 py-14"><div className="overflow-y-auto max-h-32 ">
                  <select>
                    <option value="">Start time</option>
                    <option></option>
                  </select>
                  <br />
                  <select>
                    <option value="">End time</option>
                    <option></option>
                  </select>
                </div></td>
              <td className="px-6 py-14"><div className="overflow-y-auto max-h-32 ">
                  <select>
                    <option value="">Start time</option>
                    <option></option>
                  </select>
                  <br />
                  <select>
                    <option value="">End time</option>
                    <option></option>
                  </select>
                </div></td>
              <td className="px-6 py-14"><div className="overflow-y-auto max-h-32 ">
                  <select>
                    <option value="">Start time</option>
                    <option></option>
                  </select>
                  <br />
                  <select>
                    <option value="">End time</option>
                    <option></option>
                  </select>
                </div></td>
              <td className="px-6 py-14"><div className="overflow-y-auto max-h-32 ">
                  <select>
                    <option value="">Start time</option>
                    <option></option>
                  </select>
                  <br />
                  <select>
                    <option value="">End time</option>
                    <option></option>
                  </select>
                </div></td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">
                <button
                  onClick={handleTimeSunday}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  +
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={handleTimeMonday}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  +
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={handleTimeTuesday}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  +
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={handleTimeWednesday}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  +
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={handleTimeThursday}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  +
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={handleTimeFriday}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  +
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={handleTimeSaturday}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  +
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
