import React, { useState } from "react";
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
  const [timestamp, setTimeStamp] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  });

  const handleTimeAddButtonClick = (index) => {
    if (timestamp[index].length > 0) {
      if (
        timestamp[index][timestamp[index].length - 1].startTime === "" ||
        timestamp[index][timestamp[index].length - 1].endTime === ""
      ) {
        return alert(
          `please enter from time and end time for week ${days[index]}`
        );
      }

      timestamp[index][timestamp[index].length - 1].disabled = true;
    }

    const newField = {
      startTime: "",
      endTime: "",
    };

    const updatedTimes = {
      ...timestamp,
    };


    updatedTimes[index] = [...timestamp[index], newField];
    console.log(updatedTimes);

    setTimeStamp(updatedTimes);
  };

  // const compareTimes = (time1, time2) => {
  //   if (time1.t >= time2.t) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  // const isFromOptionDisabled = (k, time) => {
  //   let timesOfDay = timestamp[k];
  //   // console.log(timesOfDay, "Times of day");

  //   if (timesOfDay.length > 1) {
  //     for (let i = 0; i < timesOfDay.length - 1; i++) {
  //       const element = timesOfDay[i];
  //       if (
  //         JSON.parse(element.startTime).t - 1 <= time.t &&
  //         time.t <= JSON.parse(element.endTime).t
  //       ) {
  //         return true;
  //       }
  //     }
  //   }

  //   return false;
  // };

  // const isToOptionDisabled = (k, time, selectedtimeIndex) => {
  // if (timestamp[k][timestamp[k].length - 1].startTime.length > 0) {
  //     let timesOfDay = timestamp[k];

  //     if (
  //       time.t <=
  //       JSON.parse(timestamp[k][timestamp[k].length - 1].startTime).t
  //     ) {
  //       return true;
  //     }

  //     let nextElement = {};
  //     let difference = 100;

  //     if (timesOfDay.length > 1) {
  //       for (let i = 0; i < timesOfDay.length - 1; i++) {
  //         const element = timesOfDay[i];
  //         if (
  //           JSON.parse(element.startTime).t >
  //             JSON.parse(timestamp[k][timestamp[k].length - 1].startTime)
  //               .t &&
  //           time.t >= JSON.parse(element.startTime).t
  //         ) {
  //           return true;
  //         }
  //       }
  //     }

  //     if (time.t >= nextElement.t) {
  //       return true;
  //     }

  //     return false;
  //   }
  // };

  const handleStartTimeChange = (e, k) => {
    const updatedTimes = {
      ...timestamp,
    };
    updatedTimes[k][updatedTimes[k].length - 1].startTime = e.target.value;
    setTimeStamp(updatedTimes);
  };

  // k is a week number
  // e.target.value will give a time 
  const handleEndTimeChange = (e, k) => {
    const updatedTimes = {
      ...timestamp,
    };
    updatedTimes[k][updatedTimes[k].length - 1].endTime = e.target.value;
    setTimeStamp(updatedTimes);

    localStorage.setItem("selectedtimes", JSON.stringify(updatedTimes));
  };

  return (
    <div>
      {Object.keys(timestamp).map((k) => {
        return (
          <>
            <div key={k}>
              <div >
                <p>{k}</p>
                <p>{days[k]}</p>
              </div>
              <div></div>
              {timestamp[k].map((selectedtime, index) => {
                return (
                  <>
                    <div key={index}>
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
                              <option
                                value={JSON.stringify(t)}
                                // disabled={isFromOptionDisabled(k, t)}
                              >
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
                          disabled={
                            selectedtime.startTime == "" ||
                            selectedtime.disabled
                          }
                        >
                          <option value=""></option>
                          {selectedtime.startTime.length > 0 &&
                            times.map((time) => {
                              return (
                                <option
                                  value={JSON.stringify(time)}
                                  // disabled={isToOptionDisabled(k, time, index)}
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
                  timestamp[k].startTime === "" ||
                  timestamp[k].endTime === ""
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
