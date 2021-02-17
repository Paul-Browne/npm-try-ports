const net = require('net');

const isPortTaken = (port) => new Promise((resolve, reject) => {
    const tester = net.createServer()
        .once('error', err => (err.code == 'EADDRINUSE' ? resolve(true) : reject(err)))
        .once('listening', () => tester.once('close', () => resolve(false)).close())
        .listen(port)
})

module.exports = tryPorts = (port, callback) => {
    isPortTaken(port).then(res => {
        if(res){
            port++;
            tryPorts(port, callback);
        }else{
            callback(port);
        }
    })
}