// interface Laziness {
//   sleep: (time: number) => Laziness
//   sleepFirst: (time: number) => Laziness
//   eat: (food: string) => Laziness
// }

/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {Laziness}
 */
function LazyMan(name, logFn) {
    const tasks = [];
    const next = () => {
        const task = tasks.shift();
        if (task) task();
    };

    tasks.push(() => {
        logFn(`Hi, I'm ${name}`);
        next();
    });

    const laziness = {
        sleep: (time) => {
            tasks.push(() => {
                setTimeout(() => {
                    logFn(`Slept for ${time} seconds`);
                    next();
                }, time * 1000);
            });
            return laziness;
        },
        sleepFirst: (time) => {
            tasks.unshift(() => {
                setTimeout(() => {
                    logFn(`Slept first for ${time} seconds`);
                    next();
                }, time * 1000);
            });
            return laziness;
        },
        eat: (food) => {
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

module.exports = LazyMan;