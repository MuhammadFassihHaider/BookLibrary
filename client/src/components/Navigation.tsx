import React from "react";
import Button from "./Button";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <div className="py-4 mx-2 grid grid-cols-3 gap-y-4 justify-items-center md:grid-cols-6">
      <Button inputText="Books" to="/" isLink={true} />
      <Button inputText="Add Author" to="/addAuthor" isLink={true} />
      <Button inputText="Add Book" to="/addBook" isLink={true} />
      <span className="col-start-2 md:col-auto">
        <Button inputText="Authors" to="/authors" isLink={true} />
      </span>
    </div>
  );
};
export default Navigation;
