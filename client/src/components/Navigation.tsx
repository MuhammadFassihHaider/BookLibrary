import React from "react";
import Button from "./Button";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <div className="py-4 flex justify-end">
      <Button inputText="Add Author" to="addAuthor" isLink={true} />
      <Button inputText="Add Book" to="addBook" isLink={true} />
    </div>
  );
};
export default Navigation;
