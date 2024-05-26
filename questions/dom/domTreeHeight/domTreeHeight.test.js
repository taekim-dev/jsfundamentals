import { getTreeHeight } from './domFunctions';

test('Empty root node should have height 0', () => {
    document.body.innerHTML = '';
    const root = document.body;
    
    expect(getTreeHeight(root)).toBe(0);
});



test('Single node should have height 1', () => {
    document.body.innerHTML = '<div></div>';
    const root = document.querySelector('div');

    expect(getTreeHeight(root)).toBe(1);
});

test('Nested nodes should return correct height', () => {
    document.body.innerHTML = `
        <div>
            <div>
                <p>
                    <button>Hello</button>
                </p>
            </div>
            <p>
                <span>World!</span>
            </p>
        </div>`;
    const root = document.querySelector('div');
    expect(getTreeHeight(root)).toBe(4);
});

test('Complex structure should return correct height', () => {
    document.body.innerHTML = `
        <div>
            <div>
                <p>
                    <button>Hello</button>
                </p>
            </div>
            <p>
                <span>World!</span>
            </p>
            <div>
                <div>
                    <span>Deep</span>
                </div>
            </div>
        </div>`;
    const root = document.querySelector('div');
    expect(getTreeHeight(root)).toBe(5);
});

test('Single level structure should return height 2', () => {
    document.body.innerHTML = `
        <div>
            <p>Test</p>
            <p>Test</p>
        </div>`;
    const root = document.querySelector('div');
    expect(getTreeHeight(root)).toBe(2);
});
