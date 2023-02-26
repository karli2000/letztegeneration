// import { useDispatch } from 'react-redux';
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";

import Layout from "~/components/Dashboard/Layout";
import DashboardStats from "~/components/Dashboard/Visuals/DashboardStats";
import AmountStats from "~/components/Dashboard/Visuals/AmountStats";
import PageStats from "~/components/Dashboard/Visuals/PageStats";
import UserChannels from "~/components/Dashboard/Visuals/UserChannels";
import LineChart from "~/components/Dashboard/Visuals/LineChart";
import BarChart from "~/components/Dashboard/Visuals/BarChart";

const statsData = [
  {
    title: "New Users",
    value: "34.7k",
    icon: <UserGroupIcon className="h-8 w-8" />,
    description: "↗︎ 2300 (22%)",
  },
  {
    title: "Total Sales",
    value: "$34,545",
    icon: <CreditCardIcon className="h-8 w-8" />,
    description: "Current month",
  },
  {
    title: "Pending Leads",
    value: "450",
    icon: <CircleStackIcon className="h-8 w-8" />,
    description: "50 in hot leads",
  },
  {
    title: "Active Users",
    value: "5.6k",
    icon: <UsersIcon className="h-8 w-8" />,
    description: "↗︎ 300 (18%)",
  },
];

function Dashboard() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(setPageTitle({ title: '' }));
  // }, []);

  return (
    <Layout>
      {/** ---------------------- Different stats content 1 ------------------------- */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} colorIndex={k} />;
        })}
      </div>

      {/** ---------------------- Different charts ------------------------- */}
      <div className="mt-6 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        <LineChart />
        <BarChart />
      </div>

      {/** ---------------------- Different stats content 2 ------------------------- */}

      <div className="mt-6 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        <AmountStats />
        <PageStats />
      </div>

      {/** ---------------------- User source channels table  ------------------------- */}
      <UserChannels />
    </Layout>
  );
}

export default Dashboard;
