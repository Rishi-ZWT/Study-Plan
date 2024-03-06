import React, { useState, useEffect } from "react";
import times from "./time";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const TimingSelect = () => {
  const [timeStamp, setTimeStamp] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  });

  const handleTimeAddButtonClick = (index) => {
    if (timeStamp[index].length > 0) {
      if (
        timeStamp[index][timeStamp[index].length - 1].startTime === "" ||
        timeStamp[index][timeStamp[index].length - 1].endTime === ""
      ) {
        return alert(
          `please enter from time and end time for week ${days[index]}`
        );
      }

      timeStamp[index][timeStamp[index].length - 1].disabled = true;
    }

    const newField = {
      startTime: "",
      endTime: "",
    };

    const updatedTimes = {
      ...timeStamp,
    };

    updatedTimes[index] = [...timeStamp[index], newField];
    console.log(updatedTimes);

    setTimeStamp(updatedTimes);
  };

  const handleStartTimeChange = (e, k) => {
    // console.log("start: ", typeof e.target.value);
    // console.log(k)
    const updatedTimes = {
      ...timeStamp,
    };
    updatedTimes[k][updatedTimes[k].length - 1].startTime = e.target.value;
    setTimeStamp(updatedTimes);
  };

  // k is a week number
  // e.target.value will give a time
  const handleEndTimeChange = (e, k) => {
    console.log("End: ", e.target.value);
    const updatedTimes = {
      ...timeStamp,
    };
    updatedTimes[k][updatedTimes[k].length - 1].endTime = e.target.value;

    

    setTimeStamp(updatedTimes);
    console.log(updatedTimes);
    localStorage.setItem("selectedtimes", JSON.stringify(updatedTimes));
  };
//   const datar = Object.values(dataObject).map((key) =>
//   dataObject[key].map((item, index) => item)
// );
// console.log("datar: ", datar);
  return (
    <div>
      {Object.keys(timeStamp).map((k) => {
        return (
          <>
            <div key={k}>
              <div>
                <p>{k}</p>
                <p>{days[k]}</p>
              </div>
              <div></div>
              {timeStamp[k].map((selectedtime, index) => {
                return (
                  <>
                    <div className="flex" key={index}>
                      <div>
                        <p>Start Time</p>
                        <select
                          name="startTime"
                          id=""
                          onChange={(e) => handleStartTimeChange(e, k)}
                          disabled={selectedtime.disabled}
                        >
                          <option value=""></option>
                          {times.map((t) => {
                            return (
                              <option value={JSON.stringify(t)}>
                                {`${t.hours}:${t.minutes} ${t.meridiem}`}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div>
                        <p>End Time</p>
                        <select
                          name="endTime"
                          id=""
                          onChange={(e) => handleEndTimeChange(e, k)}
                          disabled={selectedtime.disabled}
                        >
                          <option value=""></option>
                          {selectedtime.startTime.length > 0 &&
                            times.map((time) => {
                              return (
                                <option
                                  value={JSON.stringify(time)}
                                >{`${time.hours}:${time.minutes} ${time.meridiem}`}</option>
                              );
                            })}
                        </select>
                      </div>
                    </div>
                    <div></div>
                  </>
                );
              })}
              <button
                disabled={
                  timeStamp[k].startTime === "" || timeStamp[k].endTime === ""
                }
                onClick={() => handleTimeAddButtonClick(k)}
              >
                +
              </button>
            </div>
            <div className="divider"></div>
          </>
        );
      })}
    </div>
  );
};

export default TimingSelect;

