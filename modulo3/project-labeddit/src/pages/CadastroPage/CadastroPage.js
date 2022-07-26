
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToHome } from "../../routes/coordinator";

export const CadastroPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => goToHome(navigate)}> Entrar</button>
      <h1>Cadastro page</h1> 
      <input placeholder="Nome do Usuário " type="text"/>
      <input placeholder="E-mail" type="email"/>
      <input placeholder="Senha" type="password"/>

      <hr/>
      <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Politica de Privacidade</p>

      <input type="checkbox"/> <label>Eu concordo em receber e-mails sobre coisas legais no LabEddit</label> 
      <hr/>
      <button onClick={() =>goToFeedPage(navigate)}>Cadastrar</button>
    </div>
  );
};
