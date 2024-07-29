import { useState } from "react";

type Props = {
  location: string;
  callback: Function;
};

const Logo: React.FC<Props> = ({ location, callback }) => {
  const [open, setOpen] = useState<boolean>(false);
  const locCheck = location == "nav" ? "text-3xl" : "text-4xl";
  return (
    <div
      className="flex items-center w-full justify-center mb-10 cursor-pointer"
      onClick={() => {
        callback();
        setOpen(!open);
      }}
    >
      <div
        className={`bg-v-beige ${
          location == "nav" ? "h-12 w-12" : "h-24 w-24"
        } rounded-full flex justify-center items-center`}
      >
        <div
          className={`bg-v-green 
            ${
              location == "nav" ? "h-10 w-10" : "h-20 w-20"
            } rounded-full flex justify-center items-center`}
        >
          {open ? (
            <span
              className={`font-bold text-white drop-shadow-[0_0.1rem_0.2rem_rgba(0,0,0,0.8)] ${locCheck}`}
            >
              Vliruos
            </span>
          ) : (
            <span
              className={`font-bold text-v-beige 
                ${locCheck}
              `}
            >
              V
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logo;
