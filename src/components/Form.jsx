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
    <div
      className={`
    border
    rounded-md
    px-3 py-1
    `}
    >
      <form
        className={`
    font-mono
    text-xl
      `}
      >
        Nome
        <br />
        <input
          className="border rounded-md"
          type="text"
          name="name"
          placeholder="Primeiro nome"
          value={name}
          onChange={handleChange}
        />
        <br />
        Sobrenome
        <br />
        <input
          className="border rounded-md"
          type="text"
          name="sobrenome"
          placeholder="Sobrenome"
          value={sobrenome}
          onChange={handleChange}
        />
        <br />
        Email
        <br />
        <input
          className="border rounded-md"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <br />
        Senha
        <br />
        <input
          className="border rounded-md"
          type="password"
          name="senha"
          placeholder="Senha"
          value={senha}
          onChange={handleChange}
        />
        <br />
      </form>

      {/* <div className=" items-center"> */}
      <button
        className={`
        flex
        items-center
        justify-center
         font-serif
         text-center
         ml-20
         mt-5
         mb-1
         p-0
         w-20
         border
         rounded-md
        bg-slate-100
         hover:bg-amber-50 transition duration-100
         `}
        onClick={handleClick}
      >
        Cadastrar
      </button>
      {/* </div> */}
    </div>
  );
}
