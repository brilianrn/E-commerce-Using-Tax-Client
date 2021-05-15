const initialState = {
  carts: [],
  cart: {}
};

function cartReducer(state = initialState, actions) {
  const { payload, type } = actions;

  if (type === 'carts/setCarts') {
    return { ...state, carts: payload };
  } else if (type === 'cart/setCart') {
    return { ...state, cart: payload };
  }

  return state;
}

export default cartReducer;