import { useEffect } from "react";
import CodeRoom from "./pages/CodeRoom";
import CreateRoom from "./pages/CreateRoom";
import GameRoom from "./pages/GameRoom";
import MainPage from "./pages/Main";
import WaitingRoom from "./pages/WaitingRoom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    // Connection opened
    // socket.addEventListener("open", (event) => {
    //   socket.send("Hello Server!");
    // });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      console.log("Message from server ", event.data);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<CodeRoom />} path="/code" />
        <Route element={<CreateRoom />} path="/create" />
        <Route element={<GameRoom />} path="/game" />
        <Route element={<WaitingRoom />} path="/waiting" />
        <Route element={<MainPage />} path="*" />
      </Routes>
    </Router>
  );
};

export default App;
