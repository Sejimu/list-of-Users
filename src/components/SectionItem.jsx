import React from "react";
import Table from "react-bootstrap/Table";

function SectionItem({ user }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default SectionItem;
