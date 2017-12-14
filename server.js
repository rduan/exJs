const EventEmitter =  require('events');

class Server extends EventEmitter {
  constructor(client) {
    super();
    client.on('command', (command)=>{
      console.info('server: ', command);
    })
  }
}

module.exports = (client)=> new Server(client);