const LazyMan = require('./lazyMan.js');

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
      const lazyMan = LazyMan("Kim", console.log);
      lazyMan.sleep(10);

      setTimeout(() => {
        expect(logSpy).toHaveBeenCalledWith("Hi, I'm Kim");
        expect(logSpy).toHaveBeenCalledWith("Slept for 10 seconds");
        done();
      }, 11000); // 10 seconds + buffer time
    }, 15000); // Set the timeout to 15 seconds

    test('LazyMan eats and sleeps', (done) => {
      const lazyMan = LazyMan("Kim", console.log);
      lazyMan.eat("apple").sleep(5);

      setTimeout(() => {
        expect(logSpy).toHaveBeenCalledWith("Hi, I'm Kim");
        expect(logSpy).toHaveBeenCalledWith("Eating apple");
        expect(logSpy).toHaveBeenCalledWith("Slept for 5 seconds");
        done();
      }, 6000); // 5 seconds + buffer time
    }, 10000); // Set the timeout to 10 seconds

    test('LazyMan sleepFirst then eats and sleeps', (done) => {
      const lazyMan = LazyMan("Kim", console.log);
      lazyMan.sleepFirst(2).eat("banana").sleep(3);

      setTimeout(() => {
        expect(logSpy).toHaveBeenCalledWith("Slept first for 2 seconds");
        expect(logSpy).toHaveBeenCalledWith("Hi, I'm Kim");
        expect(logSpy).toHaveBeenCalledWith("Eating banana");
        expect(logSpy).toHaveBeenCalledWith("Slept for 3 seconds");
        done();
      }, 6000); // 2 seconds + 3 seconds + buffer time
    }, 10000); // Set the timeout to 10 seconds
  });

  describe('edge cases', () => {
    test('LazyMan does nothing', (done) => {
      const lazyMan = LazyMan("Kim", console.log);

      setTimeout(() => {
        expect(logSpy).toHaveBeenCalledWith("Hi, I'm Kim");
        done();
      }, 100);
    }, 2000); // Set the timeout to 2 seconds

    test('LazyMan sleepFirst multiple times randomly', (done) => {
      const lazyMan = LazyMan("Kim", console.log);
      lazyMan.sleepFirst(1).eat("sandwich").sleepFirst(2);

      setTimeout(() => {
        expect(logSpy).toHaveBeenCalledWith("Slept first for 2 seconds");
        expect(logSpy).toHaveBeenCalledWith("Slept first for 1 second");
        expect(logSpy).toHaveBeenCalledWith("Hi, I'm Kim");
        expect(logSpy).toHaveBeenCalledWith("Eating sandwich");
        done();
      }, 5000); // 2 seconds + 1 second + 2 seconds + buffer time
    }, 10000); // Set the timeout to 10 seconds
  });
});
