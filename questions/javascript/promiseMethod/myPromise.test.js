const myPromise = require('./myPromise.js')

test('myPromise resolves correctly', done => {
    const promise = new myPromise(resolve => {
        setTimeout(() => resolve('Success'), 100);
    })

    promise.then(value => {
        expect(value).toBe('Success');
        done();
    })
})

test('myPromise rejects correctly', done => {
    const promise = new myPromise((resolve, reject) => {
        setTimeout(() => reject('error'), 100);
    });

    promise.then(null, reason => {
        expect(reason).toBe('error');
        done();
    })
})
