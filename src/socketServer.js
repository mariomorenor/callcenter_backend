const {Server} = require("socket.io");

const InitializeSocketServer=(server)=>{

    const io = new Server(server,{
        cors:{
            origin:"*"
        },
        path:"/socket"
    });

    io.on("connection",(socket)=>{
        console.log(`Nuevo cliente: ${socket.id}`);
    })
    console.log("Socket Server Initialized");
}

module.exports = InitializeSocketServer;
