const { EventEmitter } = require('events');

class MyEventEmitter {
    constructor() {
        this.events = {}
    }

    on(eventName, callBack) {
        if(this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callBack)
    }

    emit(eventName, ...arg) {
        const arrCallback = this.events[eventName]
        if(callBack !== undefined) {
            arrCallback.forEach(callback => {
                if(callback.length === arg.length) {
                    callback(...arg)
                }
            })
        } else {
            console.log(`Event "${eventName}" doesn't exist`)
        }
    }
}

function empty() {
    // instantiate emitter
    const em = new MyEventEmitter()

    // set an event
    em.on('hi', function() {
        console.log("hello world")
    })

    // calling my event
    em.emit('ff')
}

function withArgs(names) {
    const em = new EventEmitter()

    em.on('newFellow', () => {
        if(typeof(names) === 'string') {
            console.log("Here come's ->> " + names)
        } else if(Array.isArray(names)) {
            names.forEach(name => {
                console.log("Here come's ->> " + name);
            });
        } else {
            console.log("Wrong type of the argument")
        }
    })
    em.emit('newFellow')
}

module.exports = {
    empty,
    withArgs
}