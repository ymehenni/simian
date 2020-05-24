import React from "react";
import { Header } from "./Header";

export default {
  title: "Header",
};

export const Basic = () => (
  <Header logo={"./logo.png"} title={"TEST"} subText={"This is a test example"}>
    <button>Here is a button</button>
  </Header>
);
