const EventEmitter = require('./EventEmitter');

describe('EventEmitter Test', () => {
    describe('standard behavior', () => {
        test('handles a single event emit', () => {
            const emitter = new EventEmitter();
            let res = null;
            emitter.subscribe('event1', () => {
                res  = 99;
            })
            emitter.emit('event1');
            expect(res).toEqual(99);
        });

        test('handles multiple events emit', () => {
            const emitter = new EventEmitter();
            let res = null;
            emitter.subscribe('event1', () => {
                res  = 99;
            })
            
            emitter.subscribe('event2', () => {
                res = 0;
            })

            emitter.emit('event1');
            expect(res).toEqual(99, "Event1 did not set res to 99");
            emitter.emit('event2');
            expect(res).toEqual(0, "Event2 did not set res to 0");
        });

        test('handles a single event release', () => {
            const emitter = new EventEmitter();
            let res = 0;
            emitter.subscribe('event1', () => {
                res = 99;
            });
        
            emitter.release('event1');
            emitter.emit('event1');
            expect(res).toEqual(0, "Event1 was not released");
        });
        
        test('handles multiple events release', () => {
            const emitter = new EventEmitter();
            let res = 0;
            emitter.subscribe('event1', () => {
                res = 99;
            });
        
            emitter.subscribe('event2', () => {
                res = 1;
            });
        
            emitter.release('event1');
            emitter.release('event2');
        
            emitter.emit('event1');
            emitter.emit('event2');
        
            expect(res).toEqual(0, "Event 1 or 2 was not released");
        });        
    })

    describe('edge cases', () => {
        test('description', () => {
        });
    })
})