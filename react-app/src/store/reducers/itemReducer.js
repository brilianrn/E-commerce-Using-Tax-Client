const initialState = {
  items: [],
  item: {}
};

function itemReducer(state = initialState, actions) {
  const { payload, type } = actions;

  if (type === 'items/setItems') {
    return { ...state, items: payload };
  } else if (type === 'item/setItem') {
    return { ...state, item: payload };
  }

  return state;
}

export default itemReducer;