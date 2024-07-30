import styles from "./Main.module.scss";

import main from "~/assets/images/main.jpeg";
import Button from "../../components/UI/Button";
import Title from "../../components/UI/Title";
import Description from "../../components/UI/Description";
import ImagePage from "../../components/UI/ImagePage";
import Page from "../../components/UI/Page";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <Title>رمز کلمات</Title>
      <ImagePage src={main} />
      <Description>
        برای شروع بازی یا باید اتاق درست کنید یا وارد یک اتاق شوید
      </Description>
      <div className={styles.GroupButton}>
        <Button onClick={() => navigate("/create")}>ساخت</Button>
        <Button onClick={() => navigate("/code")}>ورود</Button>
      </div>
    </Page>
  );
};

export default MainPage;
