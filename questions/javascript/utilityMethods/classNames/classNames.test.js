import classNames from './classNames'

describe('classNames Test', () => {
    describe('standard behavior', () => {
        test('combines multiple string arguments', () => {
            const res = classNames('foo', 'bar');
            const res2 = classNames('foo', { bar: true });

            expect(res).toEqual('foo bar');
            expect(res2).toEqual('foo bar');
        });

        test('handles conditional class names based on boolean values', () => {
            const res = classNames({ 'foo-bar': true });
            const res2 = classNames({ 'foo-bar': false });

            expect(res).toEqual('foo-bar');
            expect(res2).toEqual('');
        });

        test('combines multiple objects with true values', () => {
            const res = classNames({ foo: true }, { bar: true });
            const res2 = classNames({ foo: true, bar: true });

            expect(res).toEqual('foo bar');
            expect(res2).toEqual('foo bar');
        });
    });

    describe('edge cases', () => {
        test('combines mixed arguments of strings and objects', () => {
            const res = classNames('foo', { bar: true, duck: false }, 'baz', { quux: true });
            expect(res).toEqual('foo bar baz quux');
        });

        test('ignores falsy values and nullish objects', () => {
            const res = classNames(null, false, 'bar', undefined, 0, { baz: null }, '');
            expect(res).toEqual('bar');
        });

        test('handles array of class names with objects', () => {
            const arr = ['b', { c: true, d: false }];
            const res = classNames('a', arr);
            expect(res).toEqual('a b c');
        });
    });
});
