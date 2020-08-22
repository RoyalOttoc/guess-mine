import events from "./events";

const socketController = (socket) => {
  socket.on(events.nickname, ({ nickname }) => {
    socket.nickname = nickname;
  });
};

export default socketController;
