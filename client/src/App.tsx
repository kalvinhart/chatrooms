import SocketProvider from "./common/context/SocketContext";
import AppLayout from "./layout/AppLayout";

const App = () => {
  return (
    <SocketProvider>
      <AppLayout />
    </SocketProvider>
  );
};

export default App;
