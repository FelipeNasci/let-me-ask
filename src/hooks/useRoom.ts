import { useEffect, useState } from "react";
import { database } from "../services/firebase";

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

type QuestionType = FirebaseQuestions & {
  key: string;
  author: {
    avatar: string;
    name: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

export const useRoom = (roomId: string) => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
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
      setQuestions(parseQuestions as QuestionType[]);
    });
  }, [roomId]);
  return { questions, title };
};
