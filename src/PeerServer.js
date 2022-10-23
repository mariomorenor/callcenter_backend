const dotenv = require("dotenv");
const { PeerServer } = require("peer");

dotenv.config();

const port = process.env.PEER_SERVER_PORT || 6969;

const peerServer = PeerServer({
  port,
});

peerServer.on("connection",(peer)=>{
  console.log(peer.getId());
})

console.log(`Peer Server Listening on port: ${port}`);
