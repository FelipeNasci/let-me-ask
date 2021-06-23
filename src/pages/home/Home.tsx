import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";
import '../../styles/auth.scss'

export const Home = () => {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audioência em tempo real</p>
      </aside>
      <main className="main-content">
        <div>
          <img src={logoImg} alt="letmeask" />
          <button>
            <img src={googleIconImg} alt="logo do Google" />
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form >
            <input type="text" placeholder="Digite o código da sala"/>
            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
};
