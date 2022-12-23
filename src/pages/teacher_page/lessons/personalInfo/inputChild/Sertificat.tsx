import React from "react";
import { useFormContext } from "react-hook-form";
const Sertificat = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="sertificat">
      <div className="infoName">Սերտիֆիկատ</div>
      <div className="sertificatChild">
        <input type="file" className="file" {...register(`sertificat`)} />
        <div className="donwloadFile">Բեռնել ֆայլը</div>
      </div>
    </div>
  );
};

export default Sertificat;
