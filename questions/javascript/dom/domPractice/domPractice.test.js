import { JSDOM } from 'jsdom';
const { createAndAppendElement, modifyElementAttribute, addClickListener, findChildByClass } = require('./domPractice.js')

const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = window.document;

test('Create and appends an element', () => {
    const parent = document.body;
    const element = createAndAppendElement('div', 'Hello DOM', parent);

    expect(element.tagName).toBe('DIV');
    expect(element.textContent).toBe('Hello DOM');
    expect(parent.contains(element)).toBe(true);
})

test('Modifies an element\'s attribute', () => {
    const element = document.createElement('div');
    modifyElementAttribute(element, 'class', 'test-class');

    expect(element.getAttribute('class')).toBe('test-class');
})

test('Add a click event listener to an element', () => {
    const element = document.createElement('button');
    const mockCallback = jest.fn();

    addClickListener(element, mockCallback);
    element.click();

    expect(mockCallback).toHaveBeenCalled();
})

test('Find a child element by class name', () => {
    document.body.innerHTML = '<div><span class="test-class">Hello</span></div>';
    const parent = document.querySelector('div');
    const child = findChildByClass(parent, 'test-class');

    expect(child).not.toBeNull();
    expect(child.textContent).toBe('Hello');
})