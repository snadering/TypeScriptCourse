interface State {
  count: number;
}

interface Action {
  type: "increment" | "decrement";
}

export const reducer = (state: State, action: Action) => {
  const { type } = action;

  switch (type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }

};
