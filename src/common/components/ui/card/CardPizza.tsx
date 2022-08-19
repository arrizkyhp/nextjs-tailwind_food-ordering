import React from "react";
import styles from "@styles/home/CardPizza.module.scss";
import Image from "next/image";
import Link from "next/link";

const CardPizza = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/pizza.png" alt="pizza" width="500" height="500" />
      <Link href="/product/1">
        <h1 className={styles.title}>Fiori di zucca</h1>
      </Link>
      <span className={styles.price}>Rp.130.000</span>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam veniam
        aliquam distinctio atque illo obcaecati!
      </p>
    </div>
  );
};

export default CardPizza;
