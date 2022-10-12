// --creating custom hook--

import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay= 300): string => {
  const [debounced, setDebounced] = useState(value);

  // --Timeout--
  //   useEffect(() => {
  //     setTimeout(() => setDebounced(value), delay);
  //   }, [value, delay]);

  // --clear-Timeout--
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced
};
