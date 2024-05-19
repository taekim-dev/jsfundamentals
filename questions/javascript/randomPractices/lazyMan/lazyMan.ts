interface Laziness {
  sleep: (time: number) => Laziness
  sleepFirst: (time: number) => Laziness
  eat: (food: string) => Laziness
}

function lazyMan(name: string, logFn: (log: string) => void) : Laziness{
  
  const tasks : Function[] = [];
  
  function next() : void {
    const task = tasks.shift();
    if (task) task();
  }

  tasks.push(() => {
    logFn(`Hi, I'm ${name}`);
    next();
  })

  const lazyiness : Laziness = {
    sleep: (time: number) => {
      tasks.push(() => {
        setTimeout(() => {
          logFn(`Slept for ${time} seconds`);
          next();
        }, time * 1000);
      })
      return lazyiness;
    },

    sleepFirst: (time: number) => {
      tasks.unshift(() => {
        setTimeout(() => {
          logFn(`Slept for ${time} seconds`);
          next();
        }, time * 1000);
      })
      return lazyiness;
    },

    eat: (food: String) => {
      tasks.push(() => {
        logFn(`Eating ${food}`);
      })
      return lazyiness;
    }
  }

  setTimeout(next, 0);

  return lazyiness;

}

module.exports = lazyMan;

