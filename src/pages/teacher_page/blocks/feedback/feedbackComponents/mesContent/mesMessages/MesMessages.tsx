import React, { FC, useState } from "react";
import { generateArray } from "../../../../../../../helper";
import { IChatMessage } from "../../../../../../../models/chat";
import { ChatInput } from "../../chatInput/ChatInput";
import styles from "./mesMessages.module.css";
import { MessageBox } from "./MessageBox";

export const MesMessages: FC = () => {
  const [arr, setArr] = useState<IChatMessage[]>([
    { title: "dfasdfdsfsdf", time: "10:10" },
    {
      title:
        "adfdsfadfsdgfdgsfdg fgswrewtretwerte xvzvzxcv sfadfsdgfdgsfdg fgswr tretwertercxvzvzxcv",
      time: "10:10",
    },
  ]);
  const clickHandler = (text: IChatMessage) => {
    setArr((prev) => [...prev, text]);
  };
  return (
    <div className={styles.mesMessages}>
      <div className={styles.messages_container}>
        <MessageBox
          title="asdfasdfadfd"
          time="10:10"
          isMessageFromStudent={true}
        />
        {arr.map((el, i) => (
          <MessageBox key={i} {...el} />
        ))}
      </div>
      <ChatInput {...{ clickHandler }} />
    </div>
  );
};
