var http = require('http')

exports.mount = function (app, port) {

  var server = http.createServer(app);
  server.listen(port)

  var io = require('socket.io').listen(server);

  io.on('connection', function (socket) {
    console.log('A user connected');

    socket.on('send', function (data) {
        console.log(data,'STUFF STUFF');
        io.sockets.emit('message', data)
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    })
});
};