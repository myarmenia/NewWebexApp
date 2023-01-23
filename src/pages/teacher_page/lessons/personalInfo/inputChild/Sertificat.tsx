import { FC } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./inputChild.module.css";
export const Sertificat: FC = () => {
  const { register } = useFormContext();
  return (
    <div className={styles.sertificat}>
      <div className="font-semibold text-gray text-sm">Սերտիֆիկատ</div>
      <div className={styles.sertificatChild}>
        <input
          type="file"
          className={styles.file}
          {...register(`sertificat`)}
        />
        <div className={styles.donwloadFile}>Բեռնել ֆայլը</div>
      </div>
    </div>
  );
};
