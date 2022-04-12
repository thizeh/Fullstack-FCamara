import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MentoresService from "../services/MentoresService";

const AddMentoresComponent = () => {
  const [nome, setNome] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [espec, setEspec] = useState("");
  const [avatar, setAvatar] = useState("");
  const [horario, setHorario] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateMentores = (e) => {
    e.preventDefault();

    const mentores = { nome, bio, email, cargo, espec, avatar, horario, senha };

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
        setNome(response.data.nome);
        setBio(response.data.bio);
        setEmail(response.data.email);
        setCargo(response.data.cargo);
        setEspec(response.data.espec);
        setAvatar(response.data.avatar);
        setHorario(response.data.horario);
        setHorario(response.data.senha);
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
                  <label className="form-label">Nome</label>
                  <input
                    type="text"
                    placeholder="Digite o nome"
                    name="nome"
                    className="form-control"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Biografia</label>
                  <input
                    type="text"
                    placeholder="Biografia"
                    name="bio"
                    className="form-control"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    placeholder="Digite o email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Cargo</label>
                  <input
                    type="text"
                    placeholder="Digite o cargo"
                    name="cargo"
                    className="form-control"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Especialidade</label>
                  <input
                    type="text"
                    placeholder="Digite a especialidade"
                    name="espec"
                    className="form-control"
                    value={espec}
                    onChange={(e) => setEspec(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Avatar</label>
                  <input
                    type="text"
                    placeholder="Digite o link da imagem"
                    name="avatar"
                    className="form-control"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Horario</label>
                  <input
                    type="date"
                    placeholder="Digite a data"
                    name="horario"
                    className="form-control"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Senha</label>
                  <input
                    type="text"
                    placeholder="Digite a data"
                    name="senha"
                    className="form-control"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
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
