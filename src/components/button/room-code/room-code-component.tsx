import copyImg from "../../../assets/images/copy.svg";
import "../../../styles/code-room.scss";

type RoomCodeProps = {
  code: string;
};
export const RoomCode = ({ code }: RoomCodeProps) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <button className="room-code-button">
      <div onClick={copyRoomCodeToClipboard}>
        <img src={copyImg} alt="" />
      </div>
      <span>Sala {code}</span>
    </button>
  );
};
