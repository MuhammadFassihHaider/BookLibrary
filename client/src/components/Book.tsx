import React from "react";

interface BookProps {
  bookName: string;
  bookId: number;
}

const Book: React.FC<BookProps> = ({ bookId, bookName }) => {
  return (
    <div
      key={bookId}
      className="bg-gray-100 p-6 m-4 rounded-lg shadow-lg text-gray-700 text-2xl hover:shadow-xl cursor-pointer hover:bg-gray-50 hover:text-gray-600 flex justify-center items-center ">
      {bookName}
    </div>
  );
};
export default Book;
