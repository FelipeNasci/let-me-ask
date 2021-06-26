import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";
import { Button } from "../../components/button";
import { useAuth } from "../../hooks/useAuth";

import "../../styles/auth.scss";
import { database } from "../../services/firebase";

export const Home = () => {
  const { user, signInWithGoogle } = useAuth();
  const history = useHistory();

  const [roomCode, setRoomCode] = useState("");

  const handleCreateRoom = async () => {
    if (!user) await signInWithGoogle();

    history.push("/room/new");
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (!roomCode.trim()) return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    console.log({ roomRef });
    if (!roomRef.exists()) alert("sala inválida");
    else history.push(`/room/${roomCode}`);
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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};
