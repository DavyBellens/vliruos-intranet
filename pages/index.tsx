import Link from "next/link";

export default function Home() {
  const linkStyle =
    "text-4xl font-bold text-white bg-v-green p-2 rounded-lg text-center hover:bg-v-light-green hover:border-2 hover:border-v-green border-2 border-v-green";
  return (
    <>
      <Header title="Home" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-v-light-green">
        <div className="grid grid-cols-4 gap-4 mt-10 fixed top-0">
          <Link className={linkStyle} href="/dashboards">
            Dashboards
          </Link>
          <Link className={linkStyle} href="/learn">
            Learn
          </Link>
          <Link className={linkStyle} href="/inspire-and-connect">
            Inspire & Connect
          </Link>
          <Link className={linkStyle} href="/faq">
            FAQ
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-white">Welcome to</h1>
        <div>
          <h1 className="text-8xl font-bold text-white">Vliruos</h1>
        </div>
      </div>
    </>
  );
}
