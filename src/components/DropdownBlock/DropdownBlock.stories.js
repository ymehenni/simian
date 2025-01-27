import React from "react";
import { DropdownBlock } from "./DropdownBlock";

export default {
  title: "DropdownBlock",
};

export const notDropped = () => (
  <DropdownBlock
    title={"TEST"}
    subText={"This is a test example"}
    isDropped={false}
    children={<button>test</button>}
  />
);
