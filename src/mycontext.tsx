import React from "react";

export const MyContext = React.createContext<any>({
  state: {},
  setState: () => {},
});
