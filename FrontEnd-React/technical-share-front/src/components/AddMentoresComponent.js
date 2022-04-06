import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MentoresService from "../services/MentoresService";

const AddMentoresComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateMentores = (e) => {
    e.preventDefault();

    const mentores = { firstName, lastName, emailId };

    if (id) {
      MentoresService.updateMentores(id, mentores)
        .then((response) => {
          navigate("/mentores");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      MentoresService.createMentores(mentores)
        .then((response) => {
          console.log(response.data);

          navigate("/mentores");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    MentoresService.getMentoresById(id)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmailId(response.data.emailId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className=" text-center"> Modificar mentor</h2>;
    } else {
      return <h2 className=" text-center"> Adicionar mentor</h2>;
    }
  };

  return (
    <div>
      <br /> <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
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
                  onClick={(e) => saveOrUpdateMentores(e)}
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
