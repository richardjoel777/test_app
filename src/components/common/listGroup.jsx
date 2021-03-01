import React from "react";

const ListGroup = ({ items, onTestSelect, selectedTest }) => {
  return (
    <ul className="list-group">
      {items.map((test) => (
        <li
          onClick={() => onTestSelect(test)}
          className={
            test === selectedTest ? "list-group-item active" : "list-group-item"
          }
          key={test}
        >
          {test}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
