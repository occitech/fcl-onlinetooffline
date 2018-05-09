import { compose, withState } from "recompose";

export default compose(
  withState("date", "setDate", null),
  withState("focused", "setFocused", false)
);
