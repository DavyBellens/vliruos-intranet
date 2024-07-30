import Header from "@/components/navigation/Header";
import Image from "next/image";

const InspireAndConnect: React.FC = () => {
  const sectStyle = "p-5 bg-v-green rounded-lg m-2 col-span-2 grid gap-4";
  const h1Style = "text-2xl font-bold text-white text-center col-span-3";
  const storyStyle = "p-5 bg-v-lighter-green rounded-lg m-2";
  const connectStyle =
    "p-5 bg-v-lighter-green rounded-lg m-2 col-span-3 grid grid-cols-6 gap-4 grid-rows-2";
  return (
    <>
      <Header title="Inspire & Connect" />
      <main className="pl-24 bg-v-light-green min-h-screen p-4 grid grid-cols-2 gap-4">
        <h1 className="text-4xl font-bold text-white col-span-3 flex justify-center items-center p-5">
          Inspire & Connect
        </h1>
        <section className={`${sectStyle} grid-cols-3`}>
          <h1 className={h1Style}>Inspire</h1>
          <p className="col-span-3 text-white text-center">
            Here you can find inspirational stories from our community members.
          </p>
          <div className={storyStyle}>
            <h2 className="text-xl font-bold text-white">Story 1</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem, quidem, quas, dolores quos quae nemo voluptatum
              asperiores quibusdam ratione iusto.
            </p>
          </div>
          <div className={storyStyle}>
            <h2 className="text-xl font-bold text-white">Story 1</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem, quidem, quas, dolores quos quae nemo voluptatum
              asperiores quibusdam ratione iusto.
            </p>
          </div>
          <div className={storyStyle}>
            <h2 className="text-xl font-bold text-white">Story 1</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem, quidem, quas, dolores quos quae nemo voluptatum
              asperiores quibusdam ratione iusto.
            </p>
          </div>
        </section>
        <section className={`${sectStyle} grid-cols-2`}>
          <h1 className={h1Style}>Connect</h1>
          <p className="col-span-3 text-white text-center">
            Here you can find ways to connect with our community members.
          </p>
          <div className={connectStyle}>
            <Image
              src="/images/woman.jpg"
              alt="Portrait of a woman"
              width={100}
              height={100}
              className="rounded-lg w-full h-full overflow-hidden justify-self-start col-span-1 row-span-2"
            />
            <p className="text-white col-span-5">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates inventore, repellendus officia praesentium
              necessitatibus nihil nisi, amet consectetur est possimus unde,
              nobis itaque minus iure alias harum maiores porro obcaecati ullam.
              Officia exercitationem non dignissimos et placeat voluptatum, iure
              dolores, magni minima, fugit cumque ratione voluptate porro maxime
              dicta tempore."
            </p>
            <p className="text-white justify-self-start row-2 h-full text-lg font-bold flex items-end col-span-5">
              Laura, 25
            </p>
          </div>
          <div className={connectStyle}>
            <p className="text-white col-span-5">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates inventore, repellendus officia praesentium
              necessitatibus nihil nisi, amet consectetur est possimus unde,
              nobis itaque minus iure alias harum maiores porro obcaecati ullam.
              Officia exercitationem non dignissimos et placeat voluptatum, iure
              dolores, magni minima, fugit cumque ratione voluptate porro maxime
              dicta tempore."
            </p>
            <Image
              src="/images/man.jpg"
              alt="Portrait of a man"
              width={100}
              height={100}
              className="rounded-lg w-full h-full overflow-hidden justify-self-start col-span-1 row-span-2"
            />
            <p className="text-white justify-self-end row-2 h-full text-lg font-bold flex items-end col-span-5">
              John, 35
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default InspireAndConnect;
