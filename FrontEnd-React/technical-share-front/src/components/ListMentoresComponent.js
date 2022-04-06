import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MentoresService from "../services/MentoresService";

const ListMentoresComponent = () => {
  const [mentores, setMentores] = useState([]);

  useEffect(() => {
    MentoresService.getAllMentores()
      .then((response) => {
        setMentores(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center"> Lista de Mentores</h2>
      <Link to="/add-mentores" className="btn btn-primary mb-2">
        {" "}
        Adicionar mentores
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th> Id do Mentor</th>
          <th> Nome do Mentor</th>
          <th> Sobrenome do Mentor</th>
          <th> Email do Mentor</th>
          <th> Ações</th>
        </thead>
        <tbody>
          {mentores.map((mentor) => (
            <tr key={mentor.id}>
              <td>{mentor.id}</td>
              <td>{mentor.firstName}</td>
              <td>{mentor.lastName}</td>
              <td>{mentor.emailId}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-mentores/${mentor.id}`}
                >
                  Modificar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListMentoresComponent;
