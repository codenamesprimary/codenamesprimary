import { FC, HTMLAttributes, useState } from "react";
import styles from "./CardPicture.module.scss";
import clsx from "clsx";
import { CardProps, ColorCard } from "../../types/card";
import BlueSpy from "../../assets/images/blue-spy.jpeg";
import RedSpy from "../../assets/images/red-spy.jpeg";
import GrayCitizen from "../../assets/images/gray-citizen.jpeg";
import BlackKiller from "../../assets/images/black-killer.jpeg";

const CardPicture: FC<
  Omit<HTMLAttributes<HTMLDivElement>, "color"> &
    CardProps & { isSpy?: boolean }
> = ({ children, src, color, className, isSpy, ...props }) => {
  const [isRotate, setIsRotate] = useState<boolean>(false);

  const toggleRotate = () => setIsRotate((prev) => !prev);

  const selectedCardGurdSrc = () => {
    if (color === ColorCard.BLUE) {
      return BlueSpy;
    } else if (color === ColorCard.RED) {
      return RedSpy;
    } else if (color === ColorCard.GRAY) {
      return GrayCitizen;
    } else {
      return BlackKiller;
    }
  };

  return (
    <div
      className={clsx(
        className,
        styles.Card,
        { [styles.IsSpy]: isSpy },
        styles[color ?? ""]
      )}
      {...props}
    >
      <img className={styles.CardImage} src={src} alt="" />
      {color && (
        <div
          className={clsx(styles.Stiker, styles[color], {
            [styles.Turn45deg]: isRotate,
          })}
          onClick={toggleRotate}
        >
          <img src={selectedCardGurdSrc()} />
        </div>
      )}
    </div>
  );
};

export default CardPicture;
