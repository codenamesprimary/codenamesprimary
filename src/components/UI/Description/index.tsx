import { FC, HTMLAttributes } from "react";
import styles from "./Description.module.scss";

interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const Description: FC<DescriptionProps> = ({ children, ...props }) => {
  return (
    <p {...props} className={styles.Description}>
      {children}
    </p>
  );
};

export default Description;
