import React from 'react';
import { Button, Table } from 'react-bootstrap';
import '../styles.css'; // Importa el archivo de estilos

const TableComponent = () => {
  return (
    <div className="container mt-4">
      <Button variant="primary" className="mb-3">Create</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Information</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sample Data</td>
            <td className="action-buttons"> {/* Aplica la clase CSS */}
              <Button variant="info">Show</Button>
              <Button variant="warning">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;