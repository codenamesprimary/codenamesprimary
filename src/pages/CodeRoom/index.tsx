import { useEffect } from "react";
import Description from "../../components/UI/Description";
import ImagePage from "../../components/UI/ImagePage";
import Page from "../../components/UI/Page";
import Title from "../../components/UI/Title";
import door from "~/assets/images/door.jpeg";
import Codes from "../../components/Codes";

const CodeRoom = () => {
  useEffect(() => {}, []);

  return (
    <Page>
      <Title>در انتظار اتاق...</Title>
      <ImagePage src={door} />
      <Description>کد اتاق را وارد کنید</Description>
      <Codes count={4} />
    </Page>
  );
};

export default CodeRoom;
