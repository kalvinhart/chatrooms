import { useEffect, useState } from "react";
import { useSocket } from "../../../common/hooks/useSocket";

import { Message } from "../Message";
import { MessageInput } from "../MessageInput";
import { Message as MessageType } from "../types/Message";
import { ChatRoomWrapper } from "./ChatRoom.styles";

const ChatRoom = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { socket } = useSocket();

  useEffect(() => {
    socket.on("chat:messageReceived", (data: MessageType[]) => {
      console.log("New message received!");
      setMessages(data);
    });

    // return () => {
    //   socket?.off("chat:messageReceived");
    // };
  }, [socket]);

  const handleSendMessage = (message: Pick<MessageType, "text">) => {
    const payload: MessageType = {
      messageId: "1",
      roomId: "Test",
      senderId: "1",
      senderName: "kalvin",
      text: message.text,
      timestamp: new Date().getTime(),
    };

    socket.sendMessage(payload);
  };

  return (
    <ChatRoomWrapper>
      {messages.map((m) => (
        <Message key={m.messageId} {...m} />
      ))}

      <MessageInput send={handleSendMessage} />
    </ChatRoomWrapper>
  );
};

export default ChatRoom;
