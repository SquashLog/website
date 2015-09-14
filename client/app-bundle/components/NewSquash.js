var m = require('mithril')
var io = require('socket.io-client')
var Squash = require('../models/Squash')


var newSquash = {};
var socket = io();

newSquash.controller = function () {
    var ctrl = this;

    ctrl.squash = Squash.vm();
    this.submit = function(e,a){
        e.preventDefault()
        socket.emit('send')
    }
}

newSquash.view = function (ctrl) {
    return  m('.newSquash', [ 
                m("form", {onsubmit: ctrl.submit}, [
                m('h3', 'So you have conquered another bug.... eh?'),
                m("textarea", {
                    onchange: m.withAttr('value', ctrl.squash.title),
                    placeholder: 'What did you squash!?'
                }),
                m('br'),
                m('h4', 'What actually happened?'),
                m("textarea", {
                    class: 'description',
                    onchange: m.withAttr('value', ctrl.squash.description),
                    placeholder: 'Give us all the deeetz!!?'
                }),
                m('br'),
                m('.buffer'),
                m("button", 'Squasheddd!!!!')
            ])    
        ]);
}

module.exports = newSquash;
