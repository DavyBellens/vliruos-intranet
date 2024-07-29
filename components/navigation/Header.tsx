import Head from "next/head";
import Navbar from "./Navbar";

type Props = {
  title: string;
};
const Header: React.FC<Props> = ({ title }) => {
  return (
    <header>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Navbar />
    </header>
  );
};

export default Header;
