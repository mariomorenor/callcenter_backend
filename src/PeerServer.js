const dotenv = require("dotenv");
const { PeerServer } = require("peer");

dotenv.config();

const port = process.env.PEER_SERVER_PORT || 9090;

const peerServer = PeerServer({
  port,
});

console.log(`Peer Server Listening on port: ${port}`);
