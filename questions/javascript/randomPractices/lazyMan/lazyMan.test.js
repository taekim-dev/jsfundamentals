const lazyMan = require('./lazyMan.js');

describe('Lazy Man test', () => {

    let logSpy;

    beforeEach(() => {
      logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });
  
    afterEach(() => {
      logSpy.mockRestore();
    });

    describe('standard behavior', () => {
        test('LazyMan sleeps only', (done) => {
            const lm = lazyMan("Kim", console.log);
            lm.sleep(10);

            setTimeout(() => {
                expect(logSpy).toHaveBeenCalledWith('Hi, I\'m Kim');
                expect(logSpy).toHaveBeenCalledWith('Slept for 10 seconds');
                done();
            }, 11000); // 10 seconds + buffer time
        });

        test('LazyMan eats and sleeps', (done) => {
            const lm = lazyMan("Kim", console.log);
            lm.eat("apple").sleep(5);

            setTimeout(() => {
                expect(logSpy).toHaveBeenCalledWith('Hi, I\'m Kim');
                expect(logSpy).toHaveBeenCalledWith('Eating apple');
                expect(logSpy).toHaveBeenCalledWith('Slept for 5 seconds');
                done();
            }, 6000); // 5 seconds + buffer time
        });

        test('LazyMan sleepFirst then eats and sleeps', (done) => {
            const lm = lazyMan("Kim", console.log);
            lm.sleepFirst(2).eat("banana").sleep(3);

            setTimeout(() => {
                expect(logSpy).toHaveBeenCalledWith('Slept first for 2 seconds');
                expect(logSpy).toHaveBeenCalledWith('Hi, I\'m Kim');
                expect(logSpy).toHaveBeenCalledWith('Eating banana');
                expect(logSpy).toHaveBeenCalledWith('Slept for 3 seconds');
                done();
            }, 6000); // 2 seconds + 3 seconds + buffer time
        });
    });

    describe('edge cases', () => {
        test('LazyMan does nothing', (done) => {
            const lm = lazyMan("Kim", console.log);

            setTimeout(() => {
                expect(logSpy).toHaveBeenCalledWith('Hi, I\'m Kim');
                done();
            }, 100);
        });

        test('LazyMan sleepFirst multiple times randomly', (done) => {
            const lm = lazyMan("Kim", console.log);
            lm.sleepFirst(1).sleepFirst(2).eat("sandwich");

            setTimeout(() => {
                expect(logSpy).toHaveBeenCalledWith('Slept first for 2 seconds');
                expect(logSpy).toHaveBeenCalledWith('Slept first for 1 second');
                expect(logSpy).toHaveBeenCalledWith('Hi, I\'m Kim');
                expect(logSpy).toHaveBeenCalledWith('Eating sandwich');
                done();
            }, 4000); // 2 seconds + 1 second + buffer time
        });
    });
});
