import styles from "@styles/Featured.module.scss";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [slide, setSlide] = useState<number>(0);

  const images = [
    "/images/pizza1.jpg",
    "/images/pizza2.jpg",
    "/images/pizza3.jpg",
  ];

  const handleArrowClick = (direction: string) => {
    if (direction === "left") setSlide(slide !== 0 ? slide - 1 : 2);
    if (direction === "right") setSlide(slide !== 2 ? slide + 1 : 0);
  };

  console.log(slide);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.container__arrow} ${styles.container__arrow_left}`}
        onClick={() => handleArrowClick("left")}
      >
        <Image src="/images/arrowl.png" alt="arrow left" layout="fill" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * slide}vw)` }}
      >
        {images.map((img, i) => (
          <div key={i} className={styles.imgContainer}>
            <Image src={img} alt="featured 1" layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div
        className={`${styles.container__arrow} ${styles.container__arrow_right}`}
        onClick={() => handleArrowClick("right")}
      >
        <Image src="/images/arrowr.png" alt="arrow right" layout="fill" />
      </div>
    </div>
  );
};

export default Featured;
