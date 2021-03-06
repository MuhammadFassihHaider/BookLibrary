import React, { useState, useEffect } from "react";
import { BookFormType, AuthorType } from "../interfaces";
import Button from "../components/Button";
import { GET_AUTHORS, ADD_BOOK } from "../graphql/query";
import { useQuery, useMutation } from "@apollo/client";
interface AddBookProps {}

const AddBook: React.FC<AddBookProps> = ({}) => {
  const [form, setForm] = useState<BookFormType>({
    name: "",
    genre: "",
    authorId: "",
  });

  const [authors, setAuthors] = useState<AuthorType[]>([]);

  const { data: allAuthors } = useQuery(GET_AUTHORS, { fetchPolicy: "no-cache" });
  const [setBook, { data: bookName }] = useMutation(ADD_BOOK);

  const onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => void = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    allAuthors?.authors && setAuthors(allAuthors?.authors);
  }, [allAuthors]);

  const onClickHandler: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void = (e) => {
    setBook({
      variables: {
        name: form.name,
        genre: form.genre,
        authorId: form.authorId,
      },
    });
  };
  return (
    <div className="mx-4 mt-8 flex flex-col">
      <p className="text-xl text-gray-600 font-bold">Add Book</p>
      <div className="flex flex-col items-center mt-4 md:flex-row md:items-start">
        <input
          type="text"
          placeholder="Name"
          className="h-12 bg-gray-200 rounded p-3 my-2 w-full text-gray-500 "
          onChange={(e) => onChangeHandler(e)}
          value={form.name}
          name="name"
        />
        <input
          type="text"
          placeholder="Genre"
          className="h-12 bg-gray-200 rounded p-3 my-2 w-full text-gray-500 md:mx-2"
          onChange={(e) => onChangeHandler(e)}
          value={form.genre}
          name="genre"
        />
        <select
          name="authorId"
          onChange={(e) => onChangeHandler(e)}
          className="mb-10  bg-gray-200 w-48 h-12 rounded p-3 my-2 text-gray-500 ">
          {authors.map((author) => {
            return (
              <option value={author.id} key={author.id}>
                {author.name}
              </option>
            );
          })}
        </select>
      </div>
      <span onClick={(e) => onClickHandler(e)} className="text-center w-24 self-center">
        <Button inputText="Add" isLink={false} />
      </span>
    </div>
  );
};
export default AddBook;
