type Iteratee<T> = (value: T) => any;

export default function countBy<T>(array: T[], iteratee: Iteratee<T>): Record<string, number> {
    return array.reduce((counter: Record<string, number>, element: T) => {
        let key = iteratee(element);

        key = key !== undefined && key !== null ? key.toString() : 'undefined';
        counter[key] = (counter[key] || 0) + 1;

        return counter;
    }, {});
}
