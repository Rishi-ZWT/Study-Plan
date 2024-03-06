import React, { useState, useEffect } from "react";
import bookData from "../components/book2.json";

const Form = () => {
  
  const [selectedBooks, setSelectedBooks] = useState([
    {
      bookId: "",
      chapters: [],
      chaptersList: [],
      options: bookData,
    },
  ]);

  const handleAddBook = () => {
    const lastBook = selectedBooks[selectedBooks.length - 1];

    const filteredBookOptions = lastBook?.options?.filter(
      (datas) => datas.ind != lastBook.bookId
    );
    console.log(filteredBookOptions)

    lastBook.disabled = true;
    setSelectedBooks([
      ...selectedBooks,
      {
        bookId: "",
        chapters: [],
        chaptersList: [],
        options: [...filteredBookOptions],
      },
    ]);
  };

  const handleSelectedBook = (e, index) => {
    // console.log(e.target.value);
    const addedBook = selectedBooks.map((item, ind) => {
      if (ind === index) {
        // console.log(bookData[index].chapters);
        // console.log(e.target.value)
        return {
          ...item,
          bookId: e.target.value,
          chaptersList: bookData[index].chapters,
        };
      }
      return item;
    });

    setSelectedBooks(addedBook);
  };

  const hadleChaptersChange = (e, index) => {
    const addedBook = selectedBooks.map((item, ind) => {
      const options = [...e.target.selectedOptions];
      // console.log(options[0])
      // console.log(item)
      const values = options.map((option) => option.value);
      // console.log(values)
      if (ind === index) {
        return {
          ...item,
          chapters: values,
        };
      }
      return item;
    });
    // console.log(addedBook);
    setSelectedBooks(addedBook);

    localStorage.setItem("selectedbooks", JSON.stringify(addedBook));
  };
 
  return (
    <>
      {/* <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="name"
          ind="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_repeat_password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Bookname
        </label>
      </div> */}
      <div>
        {selectedBooks?.map((data, index) => {
          // console.log(data);
          return (
            <div>
              <div>
                {/* <p>Select Book</p> */}
                <select
                  name="select"
                  ind=""
                  key={index}
                  onChange={(e) => handleSelectedBook(e, index)}
                  // disabled={data.disabled}
                >
                  <option value="">Select a book</option>
                  {data?.options?.map((tempdata) => {
                    return <option value={tempdata.id}>{tempdata.name}</option>;
                  })}
                </select>
              </div>
              <div>
                <p>Select Chapters</p>
                <select
                  name="select"
                  id=""
                  multiple
                  onChange={(e) => hadleChaptersChange(e, index)}
                  // disabled={data.disabled}
                >
                  {data?.chaptersList?.map((chapter) => {
                    return <option value={chapter.ind}>{chapter.name}</option>;
                  })}
                </select>
              </div>
            </div>
          );
        })}

        <button onClick={handleAddBook}>+</button>
      </div>

      {/* __________________________________________________________________________________________________ */}
    </>
  );
};

export default Form;
