import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";
import { Button } from "../../components/button";
import { useHistory } from "react-router-dom";
import "../../styles/auth.scss";

export const Home = () => {
  const history = useHistory();

  const navigateToNewRoom = () => {
    history.push("/rooms/new");
  };

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
          <button className="create-room" onClick={navigateToNewRoom}>
            <img src={googleIconImg} alt="logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};
