import Category from "@/components/dashboards/Category";
import Open from "@/components/dashboards/Open";
import Header from "@/components/navigation/Header";
import { useState } from "react";

const Dashboards = () => {
  const [category, setCategory] = useState<string>("");

  const spanStyle = "col-span-5 row-span-3 flex justify-center items-center";
  return (
    <>
      <Header title="Dashboards" />
      <main className="grid bg-v-light-green min-h-screen grid-cols-5 pl-20">
        <h1 className="text-4xl text-white font-bold text-center col-span-5 flex justify-center items-center ">
          Dashboards
        </h1>
        {category ? (
          category == "back" ? (
            <article className="col-span-5 row-span-3 flex justify-center items-center">
              <Open callback={setCategory} opened={true} />
            </article>
          ) : (
            <article className="col-span-5">
              <Category category={category} callback={setCategory} />
            </article>
          )
        ) : (
          <article className={spanStyle}>
            <Open callback={setCategory} />
          </article>
        )}
      </main>
    </>
  );
};

export default Dashboards;
