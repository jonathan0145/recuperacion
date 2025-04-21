import React from 'react';
import { Button, Table } from 'react-bootstrap';
import '../styles.css';

const TableComponent = ({ onCreateClick, data = [], columns }) => {
  console.log('Data:', data); // Debugging: Log data
  console.log('Columns:', columns); // Debugging: Log columns

  return (
    <div className="container mt-4">
      <Button variant="primary" className="mb-3" onClick={onCreateClick}>Create</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id || index}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.Cell ? column.Cell({ row: item }) : item[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;