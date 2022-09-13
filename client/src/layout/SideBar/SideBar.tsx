import { RoomMenu } from "../../features/room-menu/RoomMenu";
import { SideBarWrapper } from "./SideBar.styles";

const SideBar = () => {
  return (
    <SideBarWrapper>
      <RoomMenu />
    </SideBarWrapper>
  );
};

export default SideBar;
