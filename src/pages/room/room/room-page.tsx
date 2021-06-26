import logoImg from "../../../assets/images/logo.svg";
import { Button, RoomCode } from "../../../components/button";
import { useParams } from "react-router-dom";
import "../../../styles/rooms.scss";

type RoomRouteParams = {
  id: string;
};

export const Room = () => {
  const params = useParams<RoomRouteParams>();
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="logo" />
          <RoomCode code={params.id} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>React room</h1>
          <span>4 questions</span>
        </div>

        <form>
          <textarea placeholder="what's your question?" />
          <div className="form-footer">
            <span>
              <button>Login</button>
              to send a question
            </span>
            <Button type="submit">Send question</Button>
          </div>
        </form>
      </main>
    </div>
  );
};
