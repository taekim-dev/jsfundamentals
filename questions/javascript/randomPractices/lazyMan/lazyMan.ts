interface Laziness {
  sleep: (time: number) => Laziness;
  sleepFirst: (time: number) => Laziness;
  eat: (food: string) => Laziness;
}

function lazyMan(name: string, logFn: (log: string) => void): Laziness {
  const tasks: Array<() => void> = [];

  function next(): void {
    const task = tasks.shift();
    if (task) task();
  }

  tasks.push(() => {
    logFn(`Hi, I'm ${name}`);
    next();
  });

  const laziness: Laziness = {
    sleep: (time: number) => {
      tasks.push(() => {
        setTimeout(() => {
          logFn(`Slept for ${time} seconds`);
          next();
        }, time * 1000);
      });
      return laziness;
    },

    sleepFirst: (time: number) => {
      tasks.unshift(() => {
        setTimeout(() => {
          logFn(`Slept first for ${time} seconds`);
          next();
        }, time * 1000);
      });
      return laziness;
    },

    eat: (food: string) => {
      tasks.push(() => {
        logFn(`Eating ${food}`);
        next();
      });
      return laziness;
    }
  };

  setTimeout(next, 0);

  return laziness;
}

export default lazyMan;
