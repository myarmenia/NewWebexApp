import { FC } from "react";
import { useFormContext } from "react-hook-form";

export const Sertificat: FC = () => {
  const { register } = useFormContext();
  return (
    <div className="sertificat">
      <div className="font-semibold text-gray text-sm">Սերտիֆիկատ</div>
      <div className="sertificatChild">
        <input type="file" className="file" {...register(`sertificat`)} />
        <div className="donwloadFile">Բեռնել ֆայլը</div>
      </div>
    </div>
  );
};
