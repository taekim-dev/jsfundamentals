const objectAssign = require('./objectAssign.js')

describe('Object Assign Test', () => {
    describe('standard behavior', () => {
        test('handles a simple targe and source', () => {
            const target = { name: "Kim", age: "12"};
            const source = { age: 30, country: "US"};

            const assignedTarget = objectAssign(target, source);
            expect(assignedTarget).toEqual(target);
            expect(assignedTarget.name).toEqual("Kim");
            expect(assignedTarget.age).toEqual(30);
            expect(assignedTarget.country).toEqual("US");

        });

        test('handles a complex targe and source', () => {
            const target = { 
                name: "Kim", 
                age: "12",
                address : {
                    country : "US",
                    county: "Suffolk",
                    zipcode: "11790",
                    status : {
                        visa: "F-1"
                    }
                }
            };
            const source = { 
                name: "Kim", 
                age: 30,
                address : {
                    street : "broad way",
                    zipcode: "10001",
                    status : {
                        visa: "O-1"
                    }
                }
            };

            const assignedTarget = objectAssign(target, source);
            expect(assignedTarget).toEqual(target);
            expect(assignedTarget.name).toEqual("Kim");
            expect(assignedTarget.age).toEqual(30);
            expect(assignedTarget.address.country).toEqual("US");
            expect(target.address.street).toEqual("broad way");
            expect(target.address.zipcode).toEqual("10001");
            expect(target.address.status.visa).toEqual("O-1");

        });

    })

    describe('edge cases', () => {
        test('handles an empty target', () => {
            const target = {};
            const source = { a : 1, b : 2};
            const assignedTarget = objectAssign(target, source);

            expect(target).toEqual(assignedTarget);
            expect(target.a).toEqual(1);
            expect(assignedTarget.b).toEqual(2);

        });

        test('handles an empty source', () => {
            const target = {a : 1, b : 2};
            const source = {};
            const assignedTarget = objectAssign(target, source);

            expect(target).toEqual(assignedTarget);
            expect(target.a).toEqual(1);
            expect(assignedTarget.b).toEqual(2);
        });

        test('handles arrays', () => {
            const target = { a: [1, 2, 3], b: { c: 3 } };
            const source = { a: [4, 5, 6] };
            const assignedTarget = objectAssign(target, source);

            expect(target).toEqual(assignedTarget);
            expect(target.a).toEqual([4, 5, 6]);
            expect(assignedTarget.b.c).toEqual(3);
        });

        test('handles nested objects', () => {
            const target = { a: { b: { c: 1 } } };
            const source = { a: { b: { d: 2 } } };
            const assignedTarget = objectAssign(target, source);

            expect(target).toEqual(assignedTarget);
            expect(target.a.b.c).toEqual(1);
            expect(target.a.b.d).toEqual(2);
        });
    })
})