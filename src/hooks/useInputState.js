import { useState } from "react";

const useInputState = init => {
  const [state, setstate] = useState(init);
  const setInput = e => {
    setstate(e.target.value);
  };
  return [state, setInput];
};

export default useInputState;
