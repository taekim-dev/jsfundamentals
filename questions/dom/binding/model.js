/**
 * @param {{value: string}} state
 * @param {HTMLInputElement} element
 */
// function model(state, element) {
//     element.value = state.value;

//     Object.defineProperty(state, 'value', {
//         get() {
//             return element.value;
//         },
//         set(newValue) {
//             element.value = newValue;
//         },
//         configurable: true,
//     });

//     element.addEventListener('change', () => {
//         state.value = element.value;
//     });
// }

function model(state, element) {
   const handler = {
    set(target, property, value) {
        if (property === 'value') {
            element.value = value;
        }
        target[property] = value;
        return true;
    }
   }

   const proxyState = new Proxy(state, handler);

   element.value = state.value;

   element.addEventListener('change', () => {
    proxyState.value = element.value;
   })

   return proxyState;
}

const input = document.createElement('input');
const state = { value: 'BFE' };
model(state, input);

console.log(input.value); // 'BFE'
state.value = 'dev';
console.log(input.value); // 'dev'
input.value = 'BFE.dev';
input.dispatchEvent(new Event('change'));
console.log(state.value); // 'BFE.dev'
