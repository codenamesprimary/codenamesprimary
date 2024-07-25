import { FC, HTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.Button}>
      {children}
    </button>
  );
};

export default Button;
