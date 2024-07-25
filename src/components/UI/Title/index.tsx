import { FC, HTMLAttributes } from "react";
import styles from "./Title.module.scss";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const Title: FC<TitleProps> = ({ children, ...props }) => {
  return (
    <h1 {...props} className={styles.Title}>
      {children}
    </h1>
  );
};

export default Title;
