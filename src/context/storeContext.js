

import { createContext, useState } from "react";

export let StoreContext = createContext(0);

export default function StoreContextProvider({ children }) {
  let [counterWish, setCounterWish] = useState(0);
  return (
    <StoreContext.Provider value={{ counterWish, setCounterWish }}>
      {children}
    </StoreContext.Provider>
  );
}