import Image from "next/image";

import List from "../list/List";
import ListItem from "../list/__item/ListItem";

const SIZES = {
  small: "photo__item_small",
  large: "photo__item_large",
};

const photoList = [
  {
    src: "/images/travel photo-1.jpg",
    alt: "travel photo-1",
    size: SIZES.large,
  },
  {
    src: "/images/travel photo-2.jpg",
    alt: "travel photo-2",
    size: SIZES.large,
  },
  {
    src: "/images/travel photo-3.jpg",
    alt: "travel photo-3",
    size: SIZES.large,
  },
  {
    src: "/images/travel photo-4.jpg",
    alt: "travel photo-4",
    size: SIZES.large,
  },
  {
    src: "/images/travel photo-5.jpg",
    alt: "travel photo-5",
    size: SIZES.small,
  },
  {
    src: "/images/travel photo-6.jpg",
    alt: "travel photo-6",
    size: SIZES.small,
  },
  {
    src: "/images/travel photo-7.jpg",
    alt: "travel photo-7",
    size: SIZES.small,
  },
  {
    src: "/images/travel photo-8.jpg",
    alt: "travel photo-8",
    size: SIZES.small,
  },
  {
    src: "/images/travel photo-13.jpg",
    alt: "travel photo-13",
    size: SIZES.small,
  },
  {
    src: "/images/travel photo-9.jpg",
    alt: "travel photo-9",
    size: SIZES.large,
  },
  {
    src: "/images/travel photo-10.jpg",
    alt: "travel photo-10",
    size: SIZES.large,
  },
  {
    src: "/images/travel photo-11.jpg",
    alt: "travel photo-11",
    size: SIZES.large,
  },
  {
    src: "/images/travel photo-12.jpg",
    alt: "travel photo-12",
    size: SIZES.large,
  },
];

const PhotoSection = () => (
  <List className="photo" wrapped={false}>
    {photoList.map(({ src, alt, size }, index) => (
      <ListItem className={`photo__item ${size}`} key={index}>
        <Image className="photo__elem" src={src} alt={alt} fill key={index} />
      </ListItem>
    ))}
  </List>
);

export default PhotoSection;
