import Image from "next/image";


// FIXME: должно быть Image, но случается непонятный баг
const ReviewCardPhoto = ({ src }) => (
    <img className="review-card__photo" src={src} alt="review" />
);

export default ReviewCardPhoto;
