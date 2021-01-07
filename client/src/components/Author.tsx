import React from "react";
import { BookFormType } from "../interfaces";
interface AuthorProps {
  name: string;
  id: number;
  age: string;
  book: BookFormType[];
}

const Author: React.FC<AuthorProps> = ({ age, book, id, name }) => {
  return (
    <div>
      <div
        key={id}
        className="bg-gray-100 p-6 m-4 rounded-lg shadow-lg text-gray-700 text-2xl hover:shadow-xl cursor-pointer hover:bg-gray-50 hover:text-gray-600 flex justify-center items-center flex-col">
        <p className="mb-4">{name}</p>
        {book.map((book) => {
          return (
            <div key={book.authorId} className="text-lg ">
              <p>{book.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Author;
