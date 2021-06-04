import { useCallback, useState } from "react";

export default function useCombinedRefs(...refs) {
  const [element, setElement] = useState(null);
  const response = useCallback(
    (node) => {
      setElement(node);
      console.log("useCombinedRefs", "node", node);
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref !== null) ref.current = node;
      });
    },
    [...refs, setElement]
  );
  console.log("useCombinedRefs", element);
  response.current = element;
  return response;
}
