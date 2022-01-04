export const productReducer = (
  state = { product: [], cart: [], selectedProd: [] },
  action
) => {
  if (action.type === "Add-Product") {
    return { ...state, product: [...action.data, ...state.product] };
  }
  if (action.type === "Selected-Product") {
    return { ...state, selectedProd: [action.data] }; //===>[{title:}]
  }
  if (action.type === "Add-Cart") {
    return {
      ...state,
      cart: [{ ...action.data, key: state.cart.length }, ...state.cart],
    };
  }
  if (action.type === "Remove-Product") {
    const filtered = state.cart.filter((item) => item.key !== action.data.key);
    return { ...state, cart: [...filtered] }; // [...filtered]=filtered
  }
  return state;
};
