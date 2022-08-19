import React from "react";
import styles from "@styles/home/PizzaList.module.scss";
import { CardPizza } from "../card";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>The Best Pizza in Town</div>
      <div className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
        molestiae, excepturi vero quia maiores nemo! Cum non similique,
        provident at consequatur sit alias optio, consectetur maxime tempora
        odit dignissimos, saepe magnam eum. Ab soluta, non sequi tempora dolor
        quo. Consequuntur, suscipit ab! Earum, quos. Provident soluta voluptatem
        illum enim velit?
      </div>
      <div className={styles.wrapper}>
        <CardPizza />
        <CardPizza />
        <CardPizza />
        <CardPizza />
        <CardPizza />
        <CardPizza />
        <CardPizza />
        <CardPizza />
      </div>
    </div>
  );
};

export default PizzaList;
