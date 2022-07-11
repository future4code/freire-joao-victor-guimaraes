import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://pbs.twimg.com/profile_images/721529260389830658/Q0rHfb9U_400x400.jpg"
          nome="João Victor"
          descricao="Oi, eu sou o João Victor Vitoy. Sou aluno da Labenu. Atualmente atuo como estudante Full-Stack, já atuei em setores de Tester de Software/Apps; Administrativo; Financeiro e como mecanico ."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/2026/2026596.png"
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
          imagem="https://thumbs.dreamstime.com/b/email-abrir-%C3%ADcone-novo-bonito-meticulosamente-projetado-aberto-e-mail-vetor-bem-organizado-totalmente-edit%C3%A1vel-158557448.jpg"
          campo="E-mail:"
          atributo= " jooa123@gmail.com"
        />

        <CardPequeno
          imagem="https://w7.pngwing.com/pngs/255/760/png-transparent-black-location-icon-illustration-computer-icons-adress-miscellaneous-desktop-wallpaper-location.png"
          campo="Endereço:"
          atributo= " Rua Labenu"
        />


      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5efbb5055f2478ba2bc322d0_icone_gif.gif"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />
        <CardGrande
          imagem="https://s3.amazonaws.com/resources.contratanet.com.br/portal-docs/resources/img/logo/light/101871.png"
          nome="2X3 Inteligencia Digital"
          descricao="Atuei como Tester; Administrativo; Financeiro."
        />
        <CardGrande
          imagem="data:image/png;base64,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"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
