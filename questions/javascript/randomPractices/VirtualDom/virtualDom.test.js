const { virtualize, render } = require('./virtualDom.js')

test('virtualize: converts a simple DOM element to an object', () => {
  document.body.innerHTML = '<div><h1> this is </h1><p class="paragraph"> a <button> button </button> from <a href="https://bfe.dev"><b>BFE</b>.dev</a></p></div>';
  const element = document.querySelector('div');

  const expected = {
    type: 'div',
    props: {
      children: [
        {
          type: 'h1',
          props: {
            children: ' this is '
          }
        },
        {
          type: 'p',
          props: {
            className: 'paragraph',
            children: [
              ' a ',
              {
                type: 'button',
                props: {
                  children: ' button '
                }
              },
              ' from',
              {
                type: 'a',
                props: {
                  href: 'https://bfe.dev',
                  children: [
                    {
                      type: 'b',
                      props: {
                        children: 'BFE'
                      }
                    },
                    '.dev'
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  };

  const result = virtualize(element);
  expect(result).toEqual(expected);
});

test('render: converts an object literal to a DOM element', () => {
  const obj = {
    type: 'div',
    props: {
      children: [
        {
          type: 'h1',
          props: {
            children: ' this is '
          }
        },
        {
          type: 'p',
          props: {
            className: 'paragraph',
            children: [
              ' a ',
              {
                type: 'button',
                props: {
                  children: ' button '
                }
              },
              ' from',
              {
                type: 'a',
                props: {
                  href: 'https://bfe.dev',
                  children: [
                    {
                      type: 'b',
                      props: {
                        children: 'BFE'
                      }
                    },
                    '.dev'
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  };

  const element = render(obj);
  const expectedHTML = '<div><h1> this is </h1><p class="paragraph"> a <button> button </button> from <a href="https://bfe.dev"><b>BFE</b>.dev</a></p></div>';

  expect(element.outerHTML).toEqual(expectedHTML);
});

test('virtualize: handles an empty element', () => {
    document.body.innerHTML = '<div></div>';
    const element = document.querySelector('div');
  
    const expected = {
      type: 'div',
      props: {}
    };
  
    const result = virtualize(element);
    expect(result).toEqual(expected);
});

test('render: handles an empty element', () => {
    const obj = {
      type: 'div',
      props: {}
    };
  
    const element = render(obj);
    const expectedHTML = '<div></div>';
  
    expect(element.outerHTML).toEqual(expectedHTML);
});

test('virtualize: handles an element with only text', () => {
    document.body.innerHTML = '<p>Hello, world!</p>';
    const element = document.querySelector('p');
  
    const expected = {
      type: 'p',
      props: {
        children: 'Hello, world!'
      }
    };
  
    const result = virtualize(element);
    expect(result).toEqual(expected);
});

test('render: handles an element with only text', () => {
    const obj = {
      type: 'p',
      props: {
        children: 'Hello, world!'
      }
    };
  
    const element = render(obj);
    const expectedHTML = '<p>Hello, world!</p>';
  
    expect(element.outerHTML).toEqual(expectedHTML);
});