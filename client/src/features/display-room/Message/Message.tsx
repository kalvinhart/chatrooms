import { Message as Props } from "../types/Message";
import { MessageNameWrapper, MessageWrapper } from "./Message.styles";

const Message = (message: Props) => {
  const { senderName, timestamp, text } = message;
  return (
    <MessageWrapper>
      <MessageNameWrapper>
        <span>{senderName}</span>
        <span>{timestamp}</span>
      </MessageNameWrapper>

      <p>{text}</p>
    </MessageWrapper>
  );
};

export default Message;
