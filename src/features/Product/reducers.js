import { createReducer } from '@reduxjs/toolkit';
import { fetchProducts, addProduct } from './actions';
import { updateProduct, deleteProduct } from './actions';

// export default createReducer([], {
//   [fetchProducts]: (state, action) => {
//     return action.payload;
//   },
//   [addProduct]: (state, action) => {
//   state.push({ id: ++currentProductId, ...action.payload });
// },
// [updateProduct]: (state, action) => {
//  const productIndex = state.findIndex(
//    (product) => product.id === action.payload.id
//  );
//  state[productIndex] = action.payload;
// },
// [deleteProduct]: (state, action) => {
//  const productIndex = state.findIndex(
//    (product) => product.id === action.payload.id
//  );
//  state.splice(productIndex, 1);
// }
// });
// ERROR
// The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer

const initialState = [];

const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchProducts, (state, action) => {
      return action.payload;
    })
.addCase(addProduct, (state, action) => {
  state.push(action.payload);
})
    .addCase(updateProduct, (state, action) => {
      const index = state.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    })
    .addCase(deleteProduct, (state, action) => {
        const idToDelete = action.payload.id ?? action.payload;
        return state.filter((p) => p.id !== idToDelete);
    });
});

export default productReducer;