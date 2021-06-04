import { useRef, forwardRef } from "react";
import useCombinedRefs from "./useCombinedRefs";

const Input = forwardRef(({ ...props }, forwardedRef) => {
  const innerRef = useRef();
  const ref = useCombinedRefs(forwardedRef, innerRef);
  const onFocusHandler = () => {
    console.log("Input", "onFocusHandler", ref, ref.current);
    ref.current.select();
  };
  return <input ref={ref} {...props} onFocus={onFocusHandler} />;
});

Input.displayName = "Input";

export default Input;
