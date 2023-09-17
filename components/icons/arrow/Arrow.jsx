import "react";
import Image from "next/image";

const Arrow = () => (
  <Image
    className={"arrow"}
    src={"/icons/arrow.svg"}
    alt={"arrow"}
    height={15}
    width={22}
  />
);

export default Arrow;
