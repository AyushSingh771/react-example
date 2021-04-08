import React from "react";

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
export { UserProvider, UserConsumer };

// React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it
