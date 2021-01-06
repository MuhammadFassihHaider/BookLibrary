import { gql } from "@apollo/client";

const BOOKS = gql`
  query books {
    books {
      id
      name
    }
  }
`;

const ADD_AUTHOR = gql`
  mutation addAuthor($name: String!, $age: String!) {
    addAuthor(name: $name, age: $age) {
      name
    }
  }
`;

const ADD_BOOK = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
    }
  }
`;

const GET_AUTHORS = gql`
  query authors {
    authors {
      id
      name
      age
      book {
        name
        genre
      }
    }
  }
`;

export { BOOKS, ADD_AUTHOR, GET_AUTHORS, ADD_BOOK };
