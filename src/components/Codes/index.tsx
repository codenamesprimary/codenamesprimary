import { FC, useState } from "react";
import styles from "./Codes.module.scss";
import { isNumber } from "../../utils/number";

interface CodesProps {
  count: number;
}

const Codes: FC<CodesProps> = (props) => {
  const [codes, setCodes] = useState<Map<number, string>>(new Map());
  // const [activeTab, setActiveTab] = useState<number>(0);

  const changeCode = (code: string, index: number) => {
    if (isNumber(code)) setCodes((prev) => prev.set(index, code));
  };

  return (
    <div className={styles.Codes}>
      {Array(props.count)
        .fill(0)
        .map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            onChange={(e) => changeCode(e.target.value, index)}
            value={codes.get(index)}
          />
        ))}
    </div>
  );
};

export default Codes;
