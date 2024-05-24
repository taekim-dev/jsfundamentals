const { JSDOM } = require('jsdom');

const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = window.document;

test('Create and appends an element', () => {
    const parent = document.body;
    const element = createAndAppendElement('div', 'Hello DOM', parent);

    expect(element.tagName).toBe('DIV');
    expect(element.textContent).toBe('Hello DOM');
    expect(parent.contains(element)).toBe(true);
})