import Header from "@/components/navigation/Header";
import Image from "next/image";

const Learn: React.FC = () => {
  return (
    <>
      <Header title="Learn" />
      <main className="pl-24 bg-v-light-green min-h-screen grid grid-cols-2 gap-4">
        <h1 className="w-full text-4xl font-bold text-white text-center col-span-2 flex justify-center items-center p-5">
          Learn
        </h1>
        <section className="flex flex-col space-y-4 p-5 bg-v-lighter-green rounded-lg m-2">
          <p className="text-2xl font-bold text-white">Latest video</p>
          <p className="text-white">
            Watch our latest community talk on the topic of "Watershed
            Management". Make sure to subscribe to our YouTube channel for more
            content.
          </p>
          <iframe
            className="w-full h-full rounded-lg overflow-hidden"
            src="https://www.youtube.com/embed/gtbDthhYtj0?si=HbmbtWdPzwJBYnPF"
          ></iframe>
        </section>
        <section className="flex flex-col space-y-4 p-5 bg-v-lighter-green rounded-lg m-2">
          <p className="text-2xl font-bold text-white">Other community talks</p>
          <p className="text-white">
            Watch our other community talks on various different topics. Make
            sure to subscribe to our YouTube channel for more content.
          </p>
          <p className="text-white h-full items-center flex justify-center">
            <a
              className="bg-v-green rounded-lg text-center font-bold text-2xl p-5 flex flex-row items-center"
              href="https://youtube.com/playlist?list=PLHzoIO0e6tUglmgZgSSbf0yNehi904-Tt&si=EvWUz1-0WemYQgkW"
            >
              <Image
                src="/images/youtube-logo.png"
                width={100}
                height={100}
                alt="logo"
                className="w-1/3 h-1/3"
              />
              Community talks
            </a>
          </p>
        </section>
        <section className="flex flex-col space-y-4 p-5 col-span-2 bg-v-lighter-green rounded-lg m-2">
          <p className="text-2xl font-bold text-white">Vliruos on YouTube</p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatem, quidem, quas, dolores quos quae nemo voluptatum
            asperiores quibusdam ratione iusto. Quisquam voluptatem, quidem,
            quas, dolores quos quae nemo voluptatum asperiores quibusdam ratione
            iusto.
          </p>
          <p className="text-white w-full items-center grid grid-cols-3">
            <a
              className="bg-v-green rounded-lg text-center font-bold text-2xl p-5 flex flex-row items-center justify-evenly col-start-2 col-span-1"
              href="https://www.youtube.com/@vlir-uos"
            >
              <Image
                src="/images/vliruos-logo.jpg"
                width={100}
                height={100}
                alt="logo"
                className="w-1/3 h-1/3 rounded-full overflow-hidden"
              />
              Vliruos account
            </a>
          </p>
        </section>
      </main>
    </>
  );
};

export default Learn;
