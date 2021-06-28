import logoImg from "../../../assets/images/logo.svg";
import { Button, RoomCode } from "../../../components/button";
import { useParams } from "react-router-dom";
import { Question } from "../../../components/question";

import "../../../styles/rooms.scss";
import { useRoom } from "../../../hooks";

type RoomRouteParams = {
  id: string;
};

export const AdminRoom = () => {
  const params = useParams<RoomRouteParams>();
  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="logo" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Close Room</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Room {title}</h1>
          {questions.length && <span>{questions.length} questions</span>}
        </div>

        {questions.map((question) => (
          <Question {...question} />
        ))}
      </main>
    </div>
  );
};
