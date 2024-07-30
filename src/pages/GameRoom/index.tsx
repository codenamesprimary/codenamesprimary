import { useEffect, useState } from "react";
import CardPicture from "../../components/CardPicture";
import Description from "../../components/UI/Description";
import Title from "../../components/UI/Title";
import { CardProps, ColorCard } from "../../types/card";
import styles from "./GameRoom.module.scss";
import pyramidFreedom from "../../assets/codepictures/pyramid-freedom.jpeg";
import DogAiBug from "../../assets/codepictures/dog-bug-ai.jpeg";
import Person from "../../assets/codepictures/person.jpeg";

const GameRoom = () => {
  const [showHint, setShowHint] = useState<boolean>(true);
  const [spyInfo] = useState<{
    // const [spyInfo, setSpyInfo] = useState<{
    count: number;
    word: string;
  }>({
    count: 0,
    word: "",
  });
  const [isTurnYou] = useState<boolean>(false);
  // const [isTurnYou, setIsTurnYou] = useState<boolean>(false);
  // const [info, setInfo] = useState<{
  const [info] = useState<{
    isSpy: boolean;
    colorTeam: "Blue" | "Red";
    pictures: CardProps[];
  }>({
    isSpy: false,
    colorTeam: "Red",
    pictures: [],
  });
  const pictures: CardProps[] = [
    { src: pyramidFreedom, color: undefined },
    { src: DogAiBug, color: ColorCard.GRAY },
    { src: pyramidFreedom, color: ColorCard.RED },
    { src: Person, color: ColorCard.BLUE },
    { src: Person, color: ColorCard.BLACK },
  ];
  const newArray = [
    ...pictures,
    ...pictures,
    ...pictures,
    ...pictures,
    ...pictures,
  ];

  useEffect(() => {
    setTimeout(() => {
      setShowHint(false);
    }, 5000);
  }, []);

  return (
    <div className={styles.GameRoom}>
      <Title>اتاق بازی</Title>

      <div className={styles.Info}>
        {info.isSpy && showHint && (
          <Description>
            در این جا باید با توجه به رنگ عکس و تیمتان یک کلمه بگویید تا تیمتان
            بتوانند تصاویر را حدس بزنند
          </Description>
        )}
        {!info.isSpy && isTurnYou && (
          <Description>
            جاسوس کلمه {spyInfo.word} را گفته،
            <br /> {spyInfo.count} عکس می‌توانید انتخاب کنید.
          </Description>
        )}
        {!isTurnYou && <Description>نوبت تیم مقابل است.</Description>}
        <Description>
          شما {info.isSpy ? "جاسوس" : "مامور"} تیم{" "}
          <span className={styles[`Color-${info.colorTeam}`]}>آبی</span> هستید.
        </Description>
        <Description>تعداد کارت باقی مانده:</Description>
        <Description className={styles.RemainingCards}>
          <span className={styles[`Color-Blue`]}>آبی: 5</span>
          <span className={styles[`Color-Red`]}>قرمز: 4</span>
        </Description>
      </div>
      <div className={styles.Cards}>
        {newArray.map((card) => {
          return <CardPicture {...card} isSpy={info.isSpy} />;
        })}
      </div>
    </div>
  );
};

export default GameRoom;
