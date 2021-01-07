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
        <Link to={`${to}`}>
          <p className="px-4 py-3 bg-gray-500 rounded-lg shadow text-lg text-gray-200 cursor-pointer  hover:bg-gray-500 hover:shadow-md mr-2 mb-2 w-36 text-center">
            {inputText}
          </p>
        </Link>
      ) : (
        <p className="px-4 py-3 bg-gray-500 rounded-lg shadow text-lg text-gray-200 cursor-pointer hover:bg-gray-500 hover:shadow-md">
          {inputText}
        </p>
      )}
    </>
  );
};
export default Button;
