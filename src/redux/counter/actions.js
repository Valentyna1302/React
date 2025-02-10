import { createAction } from '@reduxjs/toolkit';

// export const reset = { type: 'reset' };
// export const increment = { type: 'INCREMENT' };
// export const decrement = { type: 'DECREMENT' };

// export const changeStep = newStep => {
//   return {
//     type: 'changeStep',
//     payload: newStep,
//   };
// };

export const reset = createAction('reset');
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const changeStep = createAction('changeStep');

// console.log(changeStep());
// console.log(changeStep(10));
// console.log(changeStep({ name: 'PEDRO' }));
