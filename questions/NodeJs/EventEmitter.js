class EventEmitter {

    constructor() {
        this.events = new Map();
    }
 
    subscribe(eventName, callback) {
        if (!this.events.get(eventName)) {
            this.events.set(eventName, []);
        }
        this.events.get(eventName).push(callback);
    }
    
    emit(eventName, ...args) {
        const callbacks = this.events.get(eventName);
        if (callbacks) {
            callbacks.forEach(func => {
                func(args);
            })
        }
    }

    release(eventName) {
        this.events.delete(eventName);
    }
}

module.exports = EventEmitter;

