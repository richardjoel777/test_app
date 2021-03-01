import React from "react";
import TableHeader from "./Tableheader";
import TableBody from "./tableBody";

const Table = ({ columns, tests }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableBody data={tests} columns={columns} />
    </table>
  );
};

export default Table;
