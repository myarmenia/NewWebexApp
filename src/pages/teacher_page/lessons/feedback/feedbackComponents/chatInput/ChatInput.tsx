import React, { FC } from "react";
import sendMesssageImg from "../../../../../../assets/teacher_images/feedback/Vector.svg";
import styles from "./chatInput.module.css";

export const ChatInput: FC = () => {
  return (
    <div className={styles.chatInputDiv}>
      <input
        type="text"
        className={styles.chatInput}
        placeholder="Գրել նամակ․․․․"
      />
      <img src={sendMesssageImg} alt="" className={styles.chatInput_img} />
    </div>
  );
};
