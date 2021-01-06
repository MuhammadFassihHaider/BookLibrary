import React, { useState, useEffect } from "react";
import { AuthorType } from "../interfaces";
import { GET_AUTHORS } from "../graphql/query";
import { useQuery } from "@apollo/client";
import Author from "./Author";
interface AuthorsProps {}

const Authors: React.FC<AuthorsProps> = ({}) => {
  const [authors, setAuthors] = useState<AuthorType[]>([]);
  const { loading, data: allAuthors } = useQuery(GET_AUTHORS);

  useEffect(() => {
    allAuthors?.authors && setAuthors(allAuthors?.authors);
    console.log(allAuthors?.authors);
  }, [allAuthors, loading]);
  return (
    <div>
      {authors.length && authors ? (
        authors.map((author) => {
          return <Author age={author.age} book={author.book} id={author.id} name={author.name} />;
        })
      ) : loading ? (
        <p>Loading...</p>
      ) : null}
    </div>
  );
};
export default Authors;
