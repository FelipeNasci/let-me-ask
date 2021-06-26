import { useState } from "react";
import { FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";

import illustrationImg from "../../../assets/images/illustration.svg";
import logoImg from "../../../assets/images/logo.svg";
import { Button } from "../../../components/button";
import { database } from "../../../services/firebase";

import { useAuth } from "../../../hooks/useAuth";
import "../../../styles/auth.scss";

export const NewRoom = () => {
  const [newRoom, setNewRoom] = useState("");
  const { user } = useAuth();
  const history = useHistory();
  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (!newRoom.trim()) return;

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/room/${firebaseRoom.key}`);
    console.log(firebaseRoom);
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da Sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
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
