import { FC, HTMLAttributes } from "react";
import styles from "./Description.module.scss";
import clsx from "clsx";

interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const Description: FC<DescriptionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p {...props} className={clsx(className, styles.Description)}>
      {children}
    </p>
  );
};

export default Description;
