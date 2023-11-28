import React from "react";

interface Props {
  cartItemsCount: number;
}

const navBar = ({ cartItemsCount }: Props) => {
  return <div>navBar: {cartItemsCount}</div>;
};

export default navBar;
