import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const liStyle =
    "cursor-pointer text-2xl hover:text-teal-500 font-bold m-5 " +
    (open ? "opacity-100" : "opacity-0");
  const navStyle =
    "h-full flex flex-col bg-v-green text-white p-4 fixed top-0 z-50 shadow-md transition-width duration-800 ease-in ";
  const ulStyle =
    "flex flex-col justify-evenly h-full w-full border-t-2 border-b-2 border-white";
  const divStyle =
    "flex-grow flex flex-col transition-opacity duration-800 ease-in";
  return (
    <nav className={navStyle}>
      <Logo location="nav" callback={() => setOpen(!open)} />
      <div className={`${divStyle} ${open ? "opacity-100" : "opacity-0 w-0"}`}>
        {open && (
          <>
            <ul className={ulStyle}>
              <li className={liStyle}>
                <Link href="/">Home</Link>
              </li>
              <li className={liStyle}>
                <Link href="/dashboards">Dashboards</Link>
              </li>
              <li className={liStyle}>
                <Link href="/learn">Learn</Link>
              </li>
              <li className={liStyle}>
                <Link href="/inspire-and-connect">Inspire & connect</Link>
              </li>
              <li className={liStyle}>
                <Link href="/faq">FAQ</Link>
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
