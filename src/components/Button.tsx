import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

interface props {
  onClick: () => void;
}

const button = ({ onClick }: props) => {
  const [stutes, setstutes] = useState(true);
  const toggle = () => {
    setstutes(!stutes);
    onclick;
  };
  if (stutes) return <FaHeart color="#ff6b81" size={30} onClick={toggle} />;
  return <CiHeart size={30} onClick={toggle} />;
};

export default button;
