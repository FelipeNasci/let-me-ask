import logoImg from "../../../assets/images/logo.svg";
import { Button } from "../../../components/button";

import "../../../styles/rooms.scss";

export const Room = () => {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="logo" />
          <div>code-room</div>
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
