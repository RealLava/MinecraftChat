export default (socket) => {

  let onPlayers = () => {
    if (socket.mcbot && socket.mcbot.players) {
      socket.emit('bot:players', socket.mcbot.players);
    }
  };

  socket.on('players', onPlayers);

};
