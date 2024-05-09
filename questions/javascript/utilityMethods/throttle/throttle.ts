function throttle(func : (...args : any[]) => void, delay : number) : (...args : any[]) => void {
    let timerId : ReturnType<typeof setTimeout> | null = null;

    return function(...args : any[]) : void {
        if(timerId === null) {
            func(...args)
            timerId = setTimeout(() => {
                timerId = null;
            }, delay)
        }
    }
}

module.exports = throttle;

