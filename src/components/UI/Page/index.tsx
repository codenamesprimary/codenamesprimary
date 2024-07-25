import { FC, HTMLAttributes } from "react";
import styles from "./Page.module.scss";

interface PageProps extends HTMLAttributes<HTMLDivElement> {}

const Page: FC<PageProps> = ({ children, ...props }) => {
  return (
    <div {...props} className={styles.Page}>
      {children}
    </div>
  );
};

export default Page;
