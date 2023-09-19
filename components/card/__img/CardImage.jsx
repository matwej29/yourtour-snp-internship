import Image from "next/image";

const SIZES = "531px 318px";

const CardImage = ({ src }) => (
  <Image
    className="card__img"
    src={src}
    alt={src}
    style={{ top: "auto" }}
    fill
    sizes={SIZES}
  />
);
export default CardImage;
