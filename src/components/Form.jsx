import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import bookList from "./book";
import Select from 'react-select'

const Form = () => {
 
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapters, setSelectedChapters] = useState([]);
  // const chapterOptions = selectedBook
  //   ? selectedBook.chapters.map(chapter => ({
  //       value: chapter.id,
  //       label: chapter.name,
  //     }))
  //   : [];
  const bookChapters = bookList.map((book) => book.chapters);
  const [selectedChapter, setSelectedChapter] = useState([]);
  const bookNames = bookList.map((book) => book.name);

  const handleBookChange = selectedOption => {
    // Update selected book
    setSelectedBook(bookList.find(book => book.id === selectedOption.value));

    // Clear selected chapters when a new book is selected
    setSelectedChapters([]);
  };

  const handleChapterChange = selectedOptions => {
    // Update selected chapters
    setSelectedChapters(selectedOptions);
  };

 
// console.log(selectedBook)
  const handleSelectChange = (event) => {
    // console.log(event.target.value)
    setSelectedBook(event.target.value);
  };
  console.log(selectedBook)
  return (
    <>
      <form className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            id="name"
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
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
             <select value={selectedBook} onChange={handleSelectChange}>
              <option value="">Select a book</option>
              {bookNames.map((bookName, index) => (
                <option key={index} value={bookName}>
                  {bookName}
                </option>
              ))}
            </select>
          </div>
          <div className="relative z-0 w-full mb-5 group">
          {/* <Select
        options={chapterOptions}
        isMulti
        value={selectedChapters}
        onChange={handleChapterChange}
      /> */}
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      
    </>
  );
};

export default Form;



// import Select from 'react-select';

//   const [selectedBook, setSelectedBook] = useState(null);
//   const [selectedChapters, setSelectedChapters] = useState([]);


  

//   return (
//     <div>
//       <label>Select a Book:</label>
//       <Select options={bookOptions} onChange={handleBookChange} />

//       <label>Select Chapters:</label>
//       <Select
//         options={chapterOptions}
//         isMulti
//         value={selectedChapters}
//         onChange={handleChapterChange}
//       />

//       {/ Display selected book and chapters /}
//       <div>
//         {selectedBook && (
//           <div>
//             <h3>Selected Book: {selectedBook.name}</h3>
//             <h4>Selected Chapters:</h4>
//             <ul>
//               {selectedChapters.map(chapter => (
//                 <li key={chapter.value}>{chapter.label}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


