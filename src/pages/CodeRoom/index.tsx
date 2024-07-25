import Description from "../../components/UI/Description";
import ImagePage from "../../components/UI/ImagePage";
import Page from "../../components/UI/Page";
import Title from "../../components/UI/Title";
import styles from "./CodeRoom.module.scss";
import door from "~/assets/images/door.jpeg";

const CodeRoom = () => {
  return (
    <Page>
      <Title>در انتظار اتاق...</Title>
      <ImagePage src={door} />
      <Description>کد اتاق را وارد کنید</Description>
      <div className={styles.Codes}>
        <input type="text" maxLength={1} />
        <input type="text" maxLength={1} />
        <input type="text" maxLength={1} />
        <input type="text" maxLength={1} />
      </div>
    </Page>
  );
};

export default CodeRoom;
