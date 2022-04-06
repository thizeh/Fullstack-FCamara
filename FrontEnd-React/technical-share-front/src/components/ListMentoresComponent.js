import React, { useState } from "react";

const ListMentoresComponent = () => {
  const [mentores, setMentores] = useState([]);

  return (
    <div className="container">
      <h2 className="text-center"> Lista de Mentores</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <th> Id do Mentor</th>
          <th> Nome do Mentor</th>
          <th> Sobrenome do Mentor</th>
          <th> Email do Mentor</th>
        </thead>
        <tbody>
          {mentores.map((mentor) => (
            <tr key={mentor.id}>
              <td>{mentor.id}</td>
              <td>{mentor.firstName}</td>
              <td>{mentor.lastName}</td>
              <td>{mentor.emailId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListMentoresComponent;
