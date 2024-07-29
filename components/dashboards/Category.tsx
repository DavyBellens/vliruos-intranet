import dashboards from "@/dashboards";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
} from "recharts";

type Props = {
  category: string;
  callback: Function;
};
const Category: React.FC<Props> = ({ category, callback }) => {
  const graphStyle = "bg-white row-span-1 flex justify-center items-center";
  const data = [
    { title: "Page A", category: 4000 },
    { title: "Page B", category: 3000 },
    { title: "Page C", category: 2000 },
    { title: "Page D", category: 2780 },
    { title: "Page E", category: 1890 },
    { title: "Page F", category: 2390 },
    { title: "Page G", category: 3490 },
  ];
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-1 gap-5">
        <div className="grid grid-cols-5 grid-rows-1 col-span-4 row-start-1">
          <button
            onClick={() => callback("back")}
            className="bg-v-green text-white font-bold text-2xl hover:bg-v-light-green rounded-full w-min p-5 m-5 col-span-1"
          >
            Back
          </button>
          <p className="text-2xl text-center font-bold text-white col-span-3 col-start-2 row-span-1 flex justify-center items-center">
            {category} dashboards
          </p>
        </div>

        <div className={graphStyle + " col-span-2 row-start-2"}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="category"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
        <div className={graphStyle + " col-span-2 row-start-2"}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="category" fill="#8884d8" />
          </BarChart>
        </div>
        <div className={graphStyle + " col-span-2 row-start-3"}>
          <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="category"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
        <div className={graphStyle + " col-span-2 row-start-3"}>
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis
                type="number"
                dataKey="category"
                name="stature"
                unit="cm"
              />
              <YAxis type="number" dataKey="category" name="weight" unit="kg" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend />
              <Scatter name="A school" data={data} fill="#8884d8" />
              <Scatter name="B school" data={data} fill="#82ca9d" />

              <Scatter name="C school" data={data} fill="#ff7300" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-5 grid-rows-4">
        {dashboards
          .filter((dashboard) => dashboard.category === category)
          .map((dashboard) => (
            <div
              key={dashboard.title}
              className="bg-v-green text-white font-bold text-2xl hover:bg-v-light-green rounded-full w-full p-5 m-5 flex justify-center items-center text-center"
            >
              <a
                href={dashboard.ilink}
                target="_blank"
                className="w-full block"
              >
                {dashboard.title}
              </a>
            </div>
          ))}
      </div>
    </>
  );
};

export default Category;
