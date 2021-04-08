import React from "react";
import { UserProvider } from "./UserContext";
import CompB from "./CompB";

const CompA = () => {
  return (
    <UserProvider value="Learn Context">
      <CompB />
    </UserProvider>
  );
};
export default CompA;
