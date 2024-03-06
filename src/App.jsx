import Form from "./components/Form";
import TimeSelect from "./components/TimeSelect";
import React, { useState } from "react";
import moment from "moment";
import bookData from "./components/book2.json";

function App() {
  const [plan, setPlan] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedBooks, setSelectedBooks] = useState([
    {
      bookId: "",
      chapters: [],
      chaptersOptions: [],
      options: bookData,
    },
  ]);
  const [timingState, setTimingState] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  });

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setStartDate(date);
    const todaysDate = new Date(Date.now());

    if (date.getTime() <= todaysDate) {
      return alert("Choose future date ..");
    }

    const selectedBooks = JSON.parse(localStorage.getItem("selectedbooks"));
    console.log("Book: ", selectedBooks);
    const selectedTimes = JSON.parse(localStorage.getItem("selectedTimeSlots"));

    if (!selectedBooks || !selectedTimes) {
      return alert("Either book/time field is empty pls. select it ..");
    }

    let totalreadingTime = 0;

    selectedBooks.map((book) => {
      book.chapters.map((chapter) => {
        totalreadingTime +=
          book.chaptersOptions[Number.parseInt(chapter) - 1].no_of_words;
      });
    });

    let totalWeekTime = 0;

    for (let i = 0; i < 7; i++) {
      let singleDayTime = 0;

      timingState[i].forEach((time) => {
        if (time.startTime.length > 0 && time.endTime.length > 0) {
          singleDayTime +=
            JSON.parse(time.endTime).t - JSON.parse(time.startTime).t;
        }
      });

      totalWeekTime += singleDayTime;
    }

    while (totalreadingTime > 0) {
      let singleDayTime = 0;

      timingState[index].forEach((time) => {
        if (time.startTime.length > 0 && time.endTime.length > 0) {
          singleDayTime +=
            JSON.parse(time.endTime).t - JSON.parse(time.startTime).t;
        }
      });

      const readingMinutes = singleDayTime * 15 * 50;
      console.log("Reading minutes", readingMinutes);

      totalreadingTime -= readingMinutes;

      if (totalreadingTime <= 0) {
        break;
      }
      if (index == 6) {
        index = 0;
        totalReadingDays++;
      } else {
        index++;
        totalReadingDays++;
      }
    }

    console.log(totalReadingDays, "Total reading days");

    // const endDate = new Date(
    //   date.setDate(date.getDate() + (totalReadingDays - 1))
    // );
    const endDate = new Date(date.setDate(date.getDate() + totalReadingDays));

    setEndDate(endDate);
  };

  const handleSubmit = () => {
    if (plan.length == 0 || startDate.length == 0) {
      return alert("Please enter all fields");
    }

    const enteries = localStorage.getItem("enteries");
    console.log(enteries);

    // const selectedBooks = localStorage.getItem("selectedbooks")
    // console.log(selectedBooks);

    // const selectedTimes = localStorage.getItem("selectedtimes")
    // console.log(selectedTimes);

    // const entryData = enteries.find((event) => event.title == planName);
    // if (entryData) {
    //   return alert("Enter new plan name ..");
    // }

    const newTimingState = timingState;

    Object.keys(newTimingState).forEach((xyz) => {
      newTimingState[xyz] = newTimingState[xyz].filter((abc) => {
        return abc.startTime.length != 0 || abc.endTime.length != 0;
      });
    });

    Object.keys(newTimingState).forEach((xyz) => {
      newTimingState[xyz] = newTimingState[xyz].map((abc) => {
        let starttime = JSON.parse(abc.startTime);
        let endtime = JSON.parse(abc.endTime);
        if (!starttime || !endtime) {
          return null;
        }
        return {
          start: starttime.hours + ":" + starttime.minutes + " " + starttime.meridiem,
          end: endtime.hours + ":" + endtime.minutes + " " + endtime.meridiem,
        };
      });
    });
    let allData = [];
    console.log(allData);
    allData = [
      ...allData,
      {
        id: random_uuid,
        title: plan,
        books: selectedBooks.map((abc) => {
          return {
            book_id: abc.bookId,
            chapters: [...abc.chapters],
          };
        }),
        totalReadtime: selectedTimes,
        startDate: moment(startDate, "dd-mm-yyyy"),
        endDate: moment(endDate, "dd-mm-yyyy"),
      },
    ];

    console.log(allData);

    localStorage.setItem("enteries", JSON.stringify(allData));

    setSelectedBooks([
      {
        bookId: "",
        chapters: [],
        chaptersOptions: [],
        options: bookData,
      },
    ]);

    setTimingState({
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    });
    setPlanName("");
    setEndDate("");
    setStartDate("");
  };
  const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };
  const random_uuid = generateUUID();

  return (
    <>
      <div className="App">
        <input
          type="text"
          placeholder="Plan Title"
          onChange={(e) => setPlan(e.target.value)}
        />
        <br />
        <Form
          selectedBooks={selectedBooks}
          setSelectedBooks={setSelectedBooks}
        />
        <br />
        <TimeSelect timingState={timingState} setTimingState={setTimingState} />
        <br />
        <div>
          <span>Start Date __ </span>
          <input
            type="date"
            className="startdate"
            onChange={handleDateChange}
            name=""
            id=""
          />
        </div>

        <div>
          <span>End Date __ </span>
          <input type="date" onChange={handleDateChange} name="" id="" />
          {endDate && <p>End Date - {moment(enddate).format("ll")}</p>}
        </div>
        <br />
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default App;
