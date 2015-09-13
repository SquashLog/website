var m = require('mithril')
var io = require('socket.io-client')
var Squash = require('../models/Squash')


var chat = {};
var socket = io();

chat.controller = function () {
    var ctrl = this;

    ctrl.squash = Squash.vm();
    console.log(this.squash)
    this.submit = function(e,a){
        e.preventDefault()
        socket.emit('send', console.log(ctrl.squash.title()))
    }
}

chat.view = function (ctrl) {
    return  m("form", {onsubmit: ctrl.submit}, [
            m("input", {
                value: ctrl.squash.title(),
                onchange: m.withAttr('value', ctrl.squash.title),
                placeholder: 'What did you squash!?'
            }),
            m("button"),
            m('.show', {value: ctrl.squash.title()}),
            m('input[type=date][placeholder=Scheduled For]', {
            value: ctrl.squash.title(),
            onchange: m.withAttr('value', ctrl.squash.title)
          })
        ]);
}

module.exports = chat;
