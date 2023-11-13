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

    setName("");
    setSobrenome("");
    setEmail("");
    setSenha("");
    return alert("Seus dados foram enviados com sucesso!");
  };

  return (
    <div
      className={`
    rounded-md
    px-3 py-1
    bg-white bg-opacity-25
    focus:outline-none
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
          className={`
          font-serif
          text-center
          m-1
          rounded-md
          transition
          bg-slate-200
          hover:bg-yellow-50
          `}
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
          className={`
          font-serif
          text-center
          m-1
          rounded-md
          transition
          bg-slate-200
          hover:bg-yellow-50
          focus:outline-none
          `}
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
          className={`
          font-serif
          text-center
          m-1
          rounded-md
          transition
          bg-slate-200
          hover:bg-yellow-50
          focus:outline-none
        `}
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
          className={`
        font-serif
        text-center
        m-1
        rounded-md
        transition
        bg-slate-200
        hover:bg-yellow-50
        focus:outline-none
       `}
          type="password"
          name="senha"
          placeholder="Senha"
          value={senha}
          onChange={handleChange}
        />
        <br />
      </form>

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
         cursor-pointer
         
         `}
        onClick={handleClick}
      >
        Cadastrar
      </button>
    </div>
  );
}
