import { FC, HTMLAttributes } from "react";
import styles from "./ImagePage.module.scss";

interface ImagePageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
}

const ImagePage: FC<ImagePageProps> = ({ children, src, ...props }) => {
  return (
    <div className={styles.ImagePage}>
      <img src={src} alt="" {...props} />
    </div>
  );
};

export default ImagePage;
