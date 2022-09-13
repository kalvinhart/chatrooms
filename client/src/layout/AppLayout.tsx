import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { AppBody } from "./AppBody";
import { MainContent } from "./MainContent";

const AppLayout = () => {
  return (
    <>
      <Header />
      <AppBody>
        <SideBar />
        <MainContent />
      </AppBody>
    </>
  );
};

export default AppLayout;
