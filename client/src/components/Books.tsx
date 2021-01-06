import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { BOOKS } from "../graphql/query";
import { BooksType } from "../interfaces";
import Book from "./Book";
interface BooksProps {}

const Books: React.FC<BooksProps> = ({}) => {
  const [books, setBooks] = useState<BooksType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { data: getBooks, loading: loadingBooks } = useQuery(BOOKS);

  useEffect(() => {
    getBooks?.books && setBooks(getBooks?.books);
    setLoading(loadingBooks);
  }, [getBooks, loadingBooks]);
  return (
    <div className="my-8 w-full grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.length && books ? (
        books.map((book) => {
          return <Book bookId={book.id} bookName={book.name} />;
        })
      ) : loading ? (
        <p>Loading...</p>
      ) : null}
    </div>
  );
};
export default Books;
