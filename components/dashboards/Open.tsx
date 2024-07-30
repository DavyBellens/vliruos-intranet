import { useEffect, useRef, useState } from "react";

type Props = {
  callback: Function;
  opened?: boolean;
};

const Open: React.FC<Props> = ({ callback, opened }) => {
  const [open, setOpen] = useState<boolean>(opened || false);
  const circleRef = useRef<HTMLDivElement>(null);
  const menuStyle =
    "grid grid-rows-2 grid-cols-2 bg-v-green flex justify-center items-center mb-20 rounded-full";
  const circleStyle =
    "bg-v-green rounded-full flex justify-center items-center mb-20 user-select-none";
  const partStyle =
    "text-center text-white text-xl font-bold bg-v-green hover:bg-v-lighter-green w-full h-full items-center user-select-none flex justify-center ";
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        circleRef.current &&
        !circleRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [circleRef]);
  return (
    <>
      <section
        ref={circleRef}
        style={{
          height: open ? "60vh" : "40vh",
          width: open ? "60vh" : "40vh",
        }}
        onClick={() => {
          setOpen(true);
        }}
        className={`transition-all duration-800 ease-in-out
            ${open ? menuStyle : circleStyle}
        `}
      >
        {open ? (
          <>
            <p
              className={partStyle + " pt-10 pl-6 rounded-tl-20xl"}
              onClick={() => {
                callback("Informational");
              }}
            >
              Informational
            </p>
            <p
              className={partStyle + " pt-10 pr-10 rounded-tr-20xl"}
              onClick={() => {
                callback("Analytical");
              }}
            >
              Analytical
            </p>
            <p
              className={partStyle + " pb-10 pl-10 rounded-bl-20xl"}
              onClick={() => {
                callback("Operational");
              }}
            >
              Operational
            </p>
            <p
              className={partStyle + " pb-10 pr-10 rounded-br-20xl"}
              onClick={() => {
                callback("Other");
              }}
            >
              Other
            </p>
          </>
        ) : (
          <p className="text-white text-4xl font-bold">Click</p>
        )}
      </section>
    </>
  );
};

export default Open;
