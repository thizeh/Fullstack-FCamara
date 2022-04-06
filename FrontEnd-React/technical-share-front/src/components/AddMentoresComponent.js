import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MentoresService from "../services/MentoresService";

const AddMentoresComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();

  const saveMentores = (e) => {
    e.preventDefault();

    const mentores = { firstName, lastName, emailId };

    MentoresService.createMentores(mentores)
      .then((response) => {
        console.log(response.data);

        navigate("/mentores");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <br /> <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center"> Adicionar Mentor </h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Primeiro Nome</label>
                  <input
                    type="text"
                    placeholder="Digite o primeiro nome"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Sobrenome</label>
                  <input
                    type="text"
                    placeholder="Digite o Sobrenome"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    placeholder="Digite o email"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveMentores(e)}
                >
                  Registrar
                </button>
                <Link to="/mentores" className="btn btn-danger">
                  Cancelar
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMentoresComponent;
