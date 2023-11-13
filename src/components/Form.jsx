import React, { useState } from 'react'

export default function Form() {
  const [name, setName]=useState();
  const [sobrenome, setSobrenome]=useState();
  const [email,setEmail] = useState();
  const [senha, setSenha] = useState();

  return (
    <div>
      <h1>
      Preencha o Formulário
      </h1>
      <form className=''>
        Nome:<br />
        <input type="text" name="name" placeholder="Primeiro nome" value={name}/><br/>
        Sobrenome:<br />
        <input type="text" name="sobrenome" placeholder="Sobrenome" value={sobrenome}/><br/>
        Email:<br />
        <input type="email" name="email" placeholder="Email" value={email}/><br /> 
        Senha:<br />
        <input type="password" name="senha" placeholder="Senha" value={senha}/><br/>
      </form>
      </div>
  )
}
