import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "sobrenome":
        setSobrenome(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "senha":
        setSenha(value);
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    if (!name || !sobrenome || !email || !senha) {
      return alert("Preencha todos os campos!");
    }
    localStorage.setItem("name", name);
    localStorage.setItem("sobrenome", sobrenome);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);
    return alert("Seus dados foram enviados com sucesso!");
  };

  return (
    <div>
      <h1>Preencha o Formulário</h1>
      <form>
        Nome:
        <br />
        <input
          type="text"
          name="name"
          placeholder="Primeiro nome"
          value={name}
          onChange={handleChange}
        />
        <br />
        Sobrenome:
        <br />
        <input
          type="text"
          name="sobrenome"
          placeholder="Sobrenome"
          value={sobrenome}
          onChange={handleChange}
        />
        <br />
        Email:
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <br />
        Senha:
        <br />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={senha}
          onChange={handleChange}
        />
        <br />
      </form>
      <button onClick={handleClick}>Cadastrar</button>
    </div>
  );
}
