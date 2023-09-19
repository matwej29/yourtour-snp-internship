import Image from "next/image";

const ReviewCardPhoto = ({ src }) => (
  <Image
    className="review-card__photo"
    src={src}
    alt="review photo"
    width={75}
    height={75}
  />
);

export default ReviewCardPhoto;
