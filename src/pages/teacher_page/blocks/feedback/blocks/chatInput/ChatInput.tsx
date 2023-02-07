import { FC, TextareaHTMLAttributes, useRef } from "react";
import sendMesssageImg from "../../../../../../assets/teacher_images/feedback/Vector.svg";
import { addZero, enterPress } from "../../../../../../helper";
import { IChatMessage } from "../../../../../../models/chat";
import styles from "./chatInput.module.css";

interface ChatInputProps {
  clickHandler: (text: IChatMessage) => void;
}

export const ChatInput: FC<
  TextareaHTMLAttributes<HTMLTextAreaElement> & ChatInputProps
> = ({ clickHandler, ...props }) => {
  const ref = useRef<HTMLTextAreaElement>(null);
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
    <div className={styles.box}>
      <textarea
        {...props}
        ref={ref}
        className={styles.textarea}
        placeholder="Գրել նամակ․․․․"
        onKeyDown={(e) => enterPress(e, sendMessage)}
      />
      <img
        src={sendMesssageImg}
        alt=""
        className={styles.img}
        onClick={sendMessage}
      />
    </div>
  );
};
