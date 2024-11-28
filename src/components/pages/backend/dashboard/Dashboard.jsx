import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import DashboardAccordion from "./DashboardAccordion";
import DashboardCard from "./DashboardCard";

import { clothes} from "../clothes-data";

const Dashboard = () => {
  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="Dashboard" subtitle="Welcome to Zenorobe!" />
            <div className="px-4">
              <div className="grid grid-cols-[1fr_400px] gap-5 mt-5">
                <div className="stats">
                  <div className="grid grid-cols-4 gap-5">
                    <DashboardCard title="T Shirt" filterby="T Shirt" />
                    <DashboardCard title="Pants" filterby="Pants" />

                  </div>

                  <div className="chart mt-10">
                    <h3>Clothing Price</h3>
                    <BarChart
                      width={1200}
                      height={400}
                      data={clothes.slice(0, 5)}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="shirt_title" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="shirt_price"
                        fill="#8884d8"
                        activeBar={<Rectangle fill="pink" stroke="blue" />}
                      />
                    </BarChart>
                  </div>
                </div>

                <div className="sidebar custom-scroll h-[calc(100vh-200px)] overflow-auto">


                  <DashboardAccordion title="T Shirt" filterby="T Shirt" />
                  <DashboardAccordion title="Pants" filterby="Pants" />

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
