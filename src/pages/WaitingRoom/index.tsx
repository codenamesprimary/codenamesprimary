import Description from "../../components/UI/Description";
import ImagePage from "../../components/UI/ImagePage";
import Page from "../../components/UI/Page";
import Title from "../../components/UI/Title";
import door from "~/assets/images/door.jpeg";

const WaitingRoom = () => {
  return (
    <Page>
      <Title>در انتظار بقیه افراد...</Title>
      <ImagePage src={door} />
      <Description>کد اتاق 3242</Description>
      <Description>
        این کد را به بقیه دوستاتون بدهید تا آن ها بیایند.
      </Description>
      <Description>4 نفر در این اتاق هستند.</Description>
    </Page>
  );
};

export default WaitingRoom;
