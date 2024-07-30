import news from "@/news";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useInterval from "use-interval";

export default function Home() {
  const [newsIndex, setNewsIndex] = useState<number>(0);
  const [loadBar, setLoadBar] = useState<string>("");
  const linkStyle =
    "text-3xl font-bold text-white bg-v-green p-2 rounded-lg text-center hover:bg-v-light-green hover:border-2 hover:border-v-green border-2 border-v-green";

  const newsStyle = "text-lg text-white p-2 rounded-lg text-center";

  const getOppositeLoadBar = () => {
    if (loadBar === "w-0") {
      return "w-full";
    } else if (loadBar === "w-1/6") {
      return "w-5/6";
    } else if (loadBar === "w-2/6") {
      return "w-4/6";
    } else if (loadBar === "w-3/6") {
      return "w-3/6";
    } else if (loadBar === "w-4/6") {
      return "w-2/6";
    } else if (loadBar === "w-5/6") {
      return "w-1/6";
    } else if (loadBar === "w-full") {
      return "w-0";
    } else {
      return "";
    }
  };

  const increaseLoadBar = () => {
    if (loadBar === "") {
      setLoadBar("w-0");
    } else if (loadBar === "w-0") {
      setLoadBar("w-1/6");
    } else if (loadBar === "w-1/6") {
      setLoadBar("w-2/6");
    } else if (loadBar === "w-2/6") {
      setLoadBar("w-3/6");
    } else if (loadBar === "w-3/6") {
      setLoadBar("w-4/6");
    } else if (loadBar === "w-4/6") {
      setLoadBar("w-5/6");
    } else if (loadBar === "w-5/6") {
      setLoadBar("w-full");
    } else if (loadBar === "w-full") {
      setLoadBar("w-0");
      setNewsIndex((newsIndex + 1) % news.length);
    }
  };
  useInterval(() => {
    increaseLoadBar();
  }, 1000);

  return (
    <>
      <Head>
        <title>Vliruos</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="grid grid-cols-4 gap-4 p-5 min-h-screen bg-v-light-green">
        <h1 className="col-span-4 text-center text-2xl font-bold text-white mt-10">
          Welcome to
        </h1>
        <h1 className="col-span-4 text-center text-6xl font-bold text-white">
          Vliruos
        </h1>
        <section className="gap-4 col-span-3">
          <article className="text-4xl font-bold text-white">
            <p>Latest news</p>
            <div className="relative mt-4 rounded-lg overflow-hidden">
              <Image
                src={news[newsIndex].img}
                width={1000}
                height={1000}
                alt={news[newsIndex].alt}
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: "0.7",
                }}
              />
              <div className="absolute top-0 left-0 w-full h-full grid grid-rows-5 p-5">
                <div className="text-2xl font-bold text-white row-start-4 flex flex-col">
                  <p>{news[newsIndex].title}</p>

                  <Link
                    className="text-xl font-bold text-white bg-v-green rounded-lg text-center p-2 w-max"
                    href={news[newsIndex].link}
                  >
                    Read more
                  </Link>
                </div>
                <div className={"row-start-5 grid grid-cols-3"}>
                  {news.map((n, index) => (
                    <div
                      className={`col-start-${index + 1} ${
                        index === newsIndex ? "" : "cursor-pointer"
                      }`}
                      onClick={() => {
                        setLoadBar("w-0");
                        setNewsIndex(index);
                      }}
                    >
                      {index === newsIndex ? (
                        <div className="flex">
                          <div
                            className={"h-1 bg-v-green rounded-full " + loadBar}
                          ></div>
                          <div
                            className={
                              "h-1 bg-white rounded-full " +
                              getOppositeLoadBar()
                            }
                          ></div>
                        </div>
                      ) : (
                        <div className="h-1"></div>
                      )}
                      <p
                        className={`text-white text-lg p-2  ${
                          newsIndex === index && "bg-v-green bg-opacity-70 "
                        }
                        ${
                          newsIndex === index ? "opacity-100 " : "opacity-70 "
                        }`}
                      >
                        {n.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>
        <aside className="flex flex-col space-y-4">
          <p className="text-4xl font-bold text-white col-span-2">
            Quick links
          </p>
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
        </aside>
      </main>
    </>
  );
}
