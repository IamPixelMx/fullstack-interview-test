import React from "react";
import { Table as BootstrapTable } from "react-bootstrap";

const Table = ({ title, elements }: { title: string; elements: any[] }) => {
  return (
    <BootstrapTable striped bordered hover>
      <thead>
        <tr>
          <th>{title}</th>
        </tr>
      </thead>
      <tbody>
        {elements.map(({ name, action }: { name: string; action?: any }, i) => (
          <tr key={`${title}-element-${i}`}>
            <td>{name}</td>
            {action && <td>{action.actionText}</td>}
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  );
};

export default Table;
