import { ChatRoom } from "../../features/display-room/ChatRoom";
import { MainContentWrapper } from "./MainContent.styles";

const MainContent = () => {
  return (
    <MainContentWrapper>
      <ChatRoom />
    </MainContentWrapper>
  );
};

export default MainContent;
