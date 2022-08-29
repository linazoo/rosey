import React from "react";

const GlobalContext = React.createContext();

export default GlobalContext;
export const GlobalConsumer = GlobalContext.Consumer;
export const GlobalProvider = GlobalContext.Provider;
