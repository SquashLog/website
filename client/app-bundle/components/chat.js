var m = require('mithril')
var io = require('socket.io-client')

var chat = {};
var socket = io();

chat.controller = function () {

    this.submit = function(e){
        e.preventDefault()
        socket.emit('send', console.log(this))
    }
}

chat.view = function (ctrl) {
    return  m("form", [
            m("input", "TWITTER!"),
            m("button", {onclick: ctrl.submit})
        ]);
}

module.exports = chat;
