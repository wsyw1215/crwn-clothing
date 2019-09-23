import { useState } from "react";

const useToggleState = (init) => {
    const [state, setstate] = useState(init);
    const setToggle = () => {
        setstate(!state);
    }
    return [state,setToggle];
}

export default useToggleState;