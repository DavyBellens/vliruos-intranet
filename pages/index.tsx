import Header from "@/components/navigation/Header";

export default function Home() {
  const liStyle = "cursor-pointer text-2xl hover:text-teal-500 font-bold m-5";
  return (
    <>
      <Header title="Home" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-v-light-green">
        <h1 className="text-4xl text-v-green font-bold text-white">
          Welcome to
        </h1>
        <div>
          <h1 className="text-8xl text-v-green font-bold text-white">
            Vliruos
          </h1>
        </div>
        <div>
          <h1 className="text-4xl text-v-green font-bold text-white">
            Sharing minds, changing lives
          </h1>
        </div>
        <p>Quick links</p>
        <ul className="bg-v-green text-white p-4 flex flex-row items-center justify-center">
          <li className={liStyle}>Dashboards</li>
          <li className={liStyle}>Learn</li>
          <li className={liStyle}>Inspire & connect</li>
          <li className={liStyle}>FAQ</li>
        </ul>
      </div>
    </>
  );
}
