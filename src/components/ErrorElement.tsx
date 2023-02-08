import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const ErrorElement: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (pathname.split("/").some((e) => ["teacher", "student"].includes(e))) {
        pathname.split("/").forEach((crumb) => {
          if (["teacher", "student"].includes(crumb)) {
            console.log(`/${crumb}`, "mtav araaaaaaaaaaaaaaaa");
            navigate(`/${crumb}`);
          }
        });
      } else navigate("/login");
    }, 1000);
  }, []);
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0">
      <h2 className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-[75px] text-center text-[red]">
        Something went wrong!!!
      </h2>
    </div>
  );
};
