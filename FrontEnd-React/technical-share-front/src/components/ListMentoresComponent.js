import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MentoresService from "../services/MentoresService";

const ListMentoresComponent = () => {
  const [mentores, setMentores] = useState([]);

  useEffect(() => {
    getAllMentores();
  }, []);

  const getAllMentores = () => {
    MentoresService.getAllMentores()
      .then((response) => {
        setMentores(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteMentores = (mentoresId) => {
    MentoresService.deleteMentores(mentoresId)
      .then((response) => {
        getAllMentores();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <th> Biografia do Mentor</th>
          <th> Email do Mentor</th>
          <th> Cargo do Mentor</th>
          <th> Especialidade do Mentor</th>
          <th> Avatar do Mentor</th>
          <th> Horário do Mentor</th>
          <th> Senha do Mentor</th>
          <th> Ações</th>
        </thead>
        <tbody>
          {mentores.map((mentor) => (
            <tr key={mentor.id}>
              <td>{mentor.id}</td>
              <td>{mentor.nome}</td>
              <td>{mentor.bio}</td>
              <td>{mentor.email}</td>
              <td>{mentor.cargo}</td>
              <td>{mentor.espec}</td>
              <td>{mentor.avatar}</td>
              <td>{mentor.horario}</td>
              <td>{mentor.senha}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-mentores/${mentor.id}`}
                >
                  Modificar
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteMentores(mentor.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListMentoresComponent;
