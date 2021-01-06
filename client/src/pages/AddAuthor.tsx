import React, { useState } from "react";
import Button from "../components/Button";
import { AuthorFormType } from "../interfaces";
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR } from "../graphql/query";
interface AddAuthorProps {}

const AddAuthor: React.FC<AddAuthorProps> = ({}) => {
  const [setAuthor, { data: author }] = useMutation(ADD_AUTHOR);

  const [form, setForm] = useState<AuthorFormType>({
    name: "",
    age: "",
  });

  const onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onClickHandler: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void = (e) => {
    setAuthor({
      variables: {
        name: form.name,
        age: form.age,
      },
    });
  };

  return (
    <div className="mx-4 mt-8">
      <p className="text-xl text-gray-600 font-bold">Add Author</p>
      <div className="flex flex-col items-center mt-4">
        <input
          type="text"
          placeholder="Name"
          className="h-12 bg-gray-200 rounded p-3 my-2 w-full text-gray-500"
          onChange={(e) => onChangeHandler(e)}
          value={form.name}
          name="name"
        />
        <input
          type="text"
          placeholder="Age"
          className="h-12 bg-gray-200 rounded p-3 my-2 mb-10 w-full text-gray-500"
          onChange={(e) => onChangeHandler(e)}
          value={form.age}
          name="age"
        />
        <span onClick={(e) => onClickHandler(e)}>
          <Button inputText="Add" isLink={false} />
        </span>
      </div>
    </div>
  );
};
export default AddAuthor;
