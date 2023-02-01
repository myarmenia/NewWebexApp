import { FC, InputHTMLAttributes, useRef } from "react";
import sendMesssageImg from "../../../../../../assets/teacher_images/feedback/Vector.svg";
import { addZero, enterPress } from "../../../../../../helper";
import { IChatMessage } from "../../../../../../models/chat";
import styles from "./chatInput.module.css";

interface ChatInputProps {
  clickHandler: (text: IChatMessage) => void;
}

export const ChatInput: FC<
  InputHTMLAttributes<HTMLInputElement> & ChatInputProps
> = ({ clickHandler, ...props }) => {
  const ref = useRef<HTMLInputElement>(null);
  const sendMessage = () => {
    if (ref.current?.value) {
      clickHandler({
        title: ref.current?.value,
        time: `${addZero(new Date().getHours())}:${addZero(
          new Date().getMinutes()
        )}`,
      });
      ref.current!.value = "";
      ref.current!.focus();
    }
  };
  return (
    <div className={styles.chatInputDiv}>
      <input
        {...props}
        type="text"
        ref={ref}
        className={styles.chatInput}
        placeholder="Գրել նամակ․․․․"
        onKeyDown={(e) => enterPress(e, sendMessage)}
      />
      <img
        src={sendMesssageImg}
        alt=""
        className={styles.chatInput_img}
        onClick={sendMessage}
      />
    </div>
  );
};
