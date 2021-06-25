import { Link } from "react-router-dom";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import { Button } from "../../components/button";

import { useAuth } from "../../hooks/useAuth";

import "../../styles/auth.scss";
export const NewRoom = () => {
  const { user } = useAuth();

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
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da Sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">click aqui</Link>{" "}
          </p>
        </div>
      </main>
    </div>
  );
};
