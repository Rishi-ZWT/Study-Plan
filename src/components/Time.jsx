import React, { useState } from "react";

function Time() {
  function generateTimeArray() {
    const timeArray = [];
    const baseTime = new Date().setHours(0, 0, 0, 0); 
  
    for (let i = 0; i < 24 * 4; i++) {
      const currentTime = new Date(baseTime + i * 15 *  60 * 1000); 
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
  
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
      timeArray.push(formattedTime);
    }
  
    return timeArray;
  }
  
  // Example usage
  const timeArray = generateTimeArray();
  console.log(timeArray);
  

  function minuteConverter() {

    let starttime = "9:30";
    let [starthours, startmin] = starttime.split(":").map(Number);
    let totalstartminutes = starthours * 60 + startmin;

    let endtime = "10:40";
    let [endhours, endmin] = endtime.split(":").map(Number);
    let totalendminutes = endhours * 60 + endmin;

    let totalminutes = totalendminutes - totalstartminutes;
  console.log(totalminutes)
    
  }
  minuteConverter();
  return <div></div>;
}

export default Time;



// Function to generate an array of timestamps with 15-minute intervals for 24 hours
