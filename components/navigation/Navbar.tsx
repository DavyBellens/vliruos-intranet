import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const liStyle =
    "cursor-pointer text-2xl hover:text-teal-500 font-bold m-5 block w-full" +
    (open ? "opacity-100" : "opacity-0");
  const navStyle =
    "h-full flex flex-col bg-v-green text-white p-4 fixed top-0 z-50 shadow-md transition-width duration-800 ease-in ";
  const ulStyle =
    "flex flex-col justify-evenly h-full w-full border-t-2 border-b-2 border-white";
  const divStyle =
    "flex-grow flex flex-col transition-opacity duration-800 ease-in";
  return (
    <nav className={navStyle} ref={ref}>
      <Logo location="nav" callback={() => setOpen(!open)} open={open} />
      <div className={`${divStyle} ${open ? "opacity-100" : "opacity-0 w-0"}`}>
        {open && (
          <>
            <ul className={ulStyle}>
              <li>
                <Link className={liStyle} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={liStyle} href="/dashboards">
                  Dashboards
                </Link>
              </li>
              <li>
                <Link className={liStyle} href="/learn">
                  Learn
                </Link>
              </li>
              <li>
                <Link className={liStyle} href="/inspire-and-connect">
                  Inspire & connect
                </Link>
              </li>
              <li>
                <Link className={liStyle} href="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
            <div className="mt-10 mb-8">
              <span className={liStyle}>Logout</span>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
