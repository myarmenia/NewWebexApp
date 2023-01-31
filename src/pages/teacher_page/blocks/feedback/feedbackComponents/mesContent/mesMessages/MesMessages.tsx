import React, { FC } from "react";
import { ChatInput } from "../../chatInput/ChatInput";
import styles from "./mesMessages.module.css";
import { MessageBox } from "./MessageBox";

export const MesMessages: FC = () => {
  return (
    <div className={styles.mesMessages}>
      <div className={styles.messages_container}>
        <MessageBox
          text="asdfasdfadfd"
          time="10:10"
          isMessageFromStudent={true}
        />
        <MessageBox text="asdfasdfadfd" time="10:10" />
        <MessageBox
          text="adfdsfadfsdgfdgsfdg fgswrewtretwerte xvzvzxcv sfadfsdgfdgsfdg fgswr tretwertercxvzvzxcv"
          time="10:10"
        />
      </div>
      <ChatInput />
    </div>
  );
};
