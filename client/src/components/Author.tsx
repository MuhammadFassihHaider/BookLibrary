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
        className="bg-gray-100 p-6 m-4 rounded-lg shadow-lg text-gray-700 text-2xl hover:shadow-xl cursor-pointer hover:bg-gray-50 hover:text-gray-600 flex justify-center items-center ">
        {name}
      </div>
      {book.map((book) => {
        return (
          <span key={book.authorId}>
            <p>{book.name}</p>
            <p>{book.genre}</p>
          </span>
        );
      })}
    </div>
  );
};
export default Author;
