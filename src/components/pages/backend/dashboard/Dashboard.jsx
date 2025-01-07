import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import DashboardAccordion from "./DashboardAccordion";
import DashboardCard from "./DashboardCard";

import { clothes } from "../clothes-data";
import useQueryData from "@/components/custom-hook/useQueryData";
import { getCategoryPrices } from "./function";
import TableLoader from "@/components/partials/TableLoader";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";

const Dashboard = () => {
  const {
    isFetching: isFetchingCloth,
    isLoading: isLoadingCloth,
    error: errorCloth,
    data: resultCloth,
  } = useQueryData(
    `/v2/clothes`, // endpoint
    "get", // method
    "clothes" // key
  );

  const {
    isFetching: isFetchingCategory,
    isLoading: isLoadingCategory,
    error: errorCategory,
    data: resultCategory,
  } = useQueryData(
    `/v2/category`, // endpoint
    "get", // method
    "category" // key
  );

  const tableData = getCategoryPrices(resultCategory, resultCloth);

  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="Dashboard" subtitle="Welcome to Jollibee!" />
            <div className="p-5 overflow-y-auto custom-scroll">
              <div className="grid grid-cols-[1fr_400px] gap-5">
                <div className="stats">
                  <div className="relative chart pb-16 min-h-[30rem]">
                    {(isFetchingCategory || isFetchingCloth) &&
                      !isLoadingCategory &&
                      !isLoadingCloth && <FetchingSpinner />}
                    {isLoadingCategory || isLoadingCloth ? (
                      <TableLoader col={1} count={15} />
                    ) : (
                      <>
                        <ResponsiveContainer width={1200} height={300}>
                          <h3>Clothing Prices</h3>
                          <BarChart
                            width={1200}
                            height={250}
                            // data={menus.slice(0, 10)}
                            data={tableData}
                            margin={{
                              top: 10,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category_title" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar
                              dataKey="clothes_price"
                              fill="#8884d8"
                              activeBar={
                                <Rectangle fill="pink" stroke="blue" />
                              }
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </>
                    )}
                  </div>
                  <div className="relative">
                    {isFetchingCategory && !isLoadingCategory && (
                      <FetchingSpinner />
                    )}

                    <div className="grid grid-cols-4 gap-5 mt-20">
                      {isLoadingCategory && <TableLoader cols={4} count={20} />}
                      {resultCategory?.count === 0 && <IconNoData />}
                      {resultCategory?.count > 0 &&
                        resultCategory?.data.map((item, key) => {
                          return (
                            <DashboardCard
                              key={key}
                              item={item}
                              resultCloth={resultCloth}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div className=" relative sidebar custom-scroll h-[calc(100vh-150px)] overflow-auto">
                  {isLoadingCategory && <TableLoader cols={4} count={20} />}
                  {resultCategory?.count === 0 && <IconNoData />}
                  {resultCategory?.count > 0 &&
                    resultCategory?.data.map((item, key) => {
                      const clothItems = resultCloth?.data.filter(
                        (clothItems) =>
                          clothItems.clothes_category_id == item.category_aid
                      );
                      return (
                        <DashboardAccordion
                          key={key}
                          item={item}
                          title={item.category_title}
                          clothItems={clothItems}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
