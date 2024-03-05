import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import bookList from "./book";

const Form = () => {
  const options = [
    { name: "Option 1️⃣", id: 1 },
    { name: "Option 2️⃣", id: 2 },
  ];
  const bookChapters = bookList.map((book) => book.chapters);
  console.log(bookChapters);
  // const [selectedBook, setSelectedBook] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState([]);
  const bookNames = bookList.map((book) => book.name);
  // console.log(bookNames[4]);

  // const [options, setOptions] = useState({
  //   options: [
  //     { name: "Option 1️⃣", id: 1 },
  //     { name: "Option 2️⃣", id: 2 },
  //   ],
  // });

  const onOptionChangeHandler = (event) => {
    setSelectedBook(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };
  //   const handleBookChapter = (e) => {
  //     e.preventDefault();
  //     let selectedChapter = e.target.value;
  //     setBooks([...options, { bookTitle: "" }]);
  //   };
  const [selectedBook, setSelectedBook] = useState("");

  const handleSelectChange = (event) => {
    setSelectedBook(event.target.value);
  };
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            // value={bookTitle}
            // onChange={handleInputChange}
            placeholder="Title"
          />
        </div>

        <div>
          <label>Select a Book:</label>
          <select value={selectedBook} onChange={handleSelectChange}>
            <option value="">Select a book</option>
            {bookNames.map((bookName, index) => (
              <option key={index} value={bookName}>
                {bookName}
              </option>
            ))}
          </select>
          {selectedBook && <p>You selected: {selectedBook}</p>}
          <Multiselect
            options={options} // Options to display in the dropdown
            // selectedValues={selectedValue} // Preselected value to persist in dropdown
            // onSelect={onSelect} // Function will trigger on select event
            // onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
