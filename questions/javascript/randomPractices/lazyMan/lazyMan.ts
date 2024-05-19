interface Laziness {
  sleep: (time: number) => Laziness
  sleepFirst: (time: number) => Laziness
  eat: (food: string) => Laziness
}

function lazyMan(name: string, logFn: (log: string) => void) : Laziness{
  return this as Laziness;
}

module.exports = lazyMan;

