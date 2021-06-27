import logoImg from "../../../assets/images/logo.svg";
import { Button, RoomCode } from "../../../components/button";
import { useParams } from "react-router-dom";
import "../../../styles/rooms.scss";
import { FormEvent, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { database } from "../../../services/firebase";
import { useEffect } from "react";

type RoomRouteParams = {
  id: string;
};

type FirebaseQuestions = Record<
  string,
  {
    author: {
      avatar: string;
      name: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
  }
>;

type Question = FirebaseQuestions & {
  key: string;
  author: {
    avatar: string;
    name: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

export const Room = () => {
  const { user } = useAuth();
  const params = useParams<RoomRouteParams>();
  const roomId = params.id;

  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions =
        databaseRoom?.questions || {};

      const parseQuestions = Object.keys(firebaseQuestions).map((key) => ({
        key,
        ...firebaseQuestions[key],
      }));

      setTitle(databaseRoom.title);
      setQuestions(parseQuestions as Question[]);
    });
  }, [roomId]);

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault();

    if (!newQuestion.trim()) return;

    if (!user) {
      throw new Error("You must be logged in");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion("");
  };

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="logo" />
          <RoomCode code={roomId} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Room {title}</h1>
          {questions.length && <span>{questions.length} questions</span>}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="what's your question?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
            <span>
              {!user && (
                <>
                  <button>Login</button> to send a question
                </>
              )}
            </span>

            <Button disabled={!user?.id || !newQuestion} type="submit">
              Send question
            </Button>
          </div>
        </form>

        {JSON.stringify(questions)}
      </main>
    </div>
  );
};
