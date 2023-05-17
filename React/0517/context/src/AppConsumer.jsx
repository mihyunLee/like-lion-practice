import React from "react";
import { createContext } from "react";
import HelloLicat from "./Components/HelloLicat";

export const UserInfo = createContext();

export function AppConsumer() {
  return (
    <UserInfo.Provider value={{ name: "gary", id: "garyIsFree" }}>
      <HelloLicat />
    </UserInfo.Provider>
  );
}
