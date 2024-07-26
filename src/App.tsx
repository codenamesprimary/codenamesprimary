import { useEffect } from "react";
import CodeRoom from "./pages/CodeRoom";
import CreateRoom from "./pages/CreateRoom";
import GameRoom from "./pages/GameRoom";
import MainPage from "./pages/Main";
import WaitingRoom from "./pages/WaitingRoom";

const App = () => {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    // Connection opened
    socket.addEventListener("open", (event) => {
      socket.send("Hello Server!");
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      console.log("Message from server ", event.data);
    });
  }, []);

  // return <MainPage />;
  // return <CodeRoom />;
  // return <CreateRoom />;
  // return <GameRoom />;
  return <WaitingRoom />;
};

export default App;
