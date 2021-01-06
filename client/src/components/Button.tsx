import React from "react";
import { Link } from "react-router-dom";
interface ButtonProps {
  inputText: string;
  to?: string;
  isLink: boolean;
}

const Button: React.FC<ButtonProps> = ({ inputText, to, isLink }) => {
  return (
    <>
      {isLink ? (
        <Link to={`/${to}`}>
          <a className="px-4 py-3 bg-gray-500 rounded-lg shadow text-lg text-gray-200 cursor-pointer mx-4 hover:bg-gray-500 hover:shadow-md">
            {inputText}
          </a>
        </Link>
      ) : (
        <a className="px-4 py-3 bg-gray-500 rounded-lg shadow text-lg text-gray-200 cursor-pointer mx-4 hover:bg-gray-500 hover:shadow-md">
          {inputText}
        </a>
      )}
    </>
  );
};
export default Button;
