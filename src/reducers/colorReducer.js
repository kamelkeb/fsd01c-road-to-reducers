const affectColor = (color, v) => Math.min(Math.max(color + v, 0), 255);
const complTo255 = (n) => 255 - n;

export const colorReducer = (previousState, action) => {
  switch (action.type) {
    case "setR":
      return {
        ...previousState,
        r: affectColor(previousState.r, action.payload),
      };
    case "setB":
      return {
        ...previousState,
        b: affectColor(previousState.b, action.payload),
      };
    case "setG":
      return {
        ...previousState,
        g: affectColor(previousState.g, action.payload),
      };
    case "changeBrightness":
      return {
        r: affectColor(previousState.r, action.payload),
        g: affectColor(previousState.g, action.payload),
        b: affectColor(previousState.b, action.payload),
      };
    default:
      return previousState;
  }
};
