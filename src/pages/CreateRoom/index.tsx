import styles from "./CreateRoom.module.scss";
import createRoom from "~/assets/images/create-room.jpeg";
import Button from "../../components/UI/Button";
import Title from "../../components/UI/Page";
import Description from "../../components/UI/Description";
import Page from "../../components/UI/Page";
import ImagePage from "../../components/UI/ImagePage";

const CreateRoom = () => {
  return (
    <Page>
      <Title>در انتظار اتاق...</Title>
      <ImagePage src={createRoom} />
      <Description>
        برای اینکه بتوانید بازی کنید باید یک اتاق بازی بسازید
      </Description>
      <Button>ساختن اتاق</Button>
    </Page>
  );
};

export default CreateRoom;
