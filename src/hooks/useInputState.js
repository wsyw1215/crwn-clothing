import { useState } from "react";

const useInputState = init => {
  const [state, setstate] = useState(init);
  const setInput = e => {
    setstate(e.target.value);
  };
  const reset = () => {
    setstate("");
  }
  return [state, setInput, reset];
};

export default useInputState;
