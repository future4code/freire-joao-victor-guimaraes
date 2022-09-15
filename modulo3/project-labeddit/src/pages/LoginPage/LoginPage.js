import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { goToCadastroPage, goToFeedPage } from "../../routes/coordinator";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <h1>Login page</h1>
      <input placeholder="E-mail" type="email" />

      <div>
        <input placeholder="Password" type={show ? "text" : "password"} />

        <button onClick={handleClick}> {show ? "Hide" : "Show"} </button>
      </div>

      <br />
      <br />
      <button onClick={() => goToFeedPage(navigate)}> Entrar </button>

      <hr />
      <button onClick={() => goToCadastroPage(navigate)}>
        Crie uma conta!
      </button>
    </div>
  );
};
