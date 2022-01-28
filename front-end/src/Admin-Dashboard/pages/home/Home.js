import "./home.css";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import OrderDetails from "../../components/orderDetails/OrderDetails";
import AddUser from "../addUser/AddUser";
import EditUser from "../editUser/EditUser";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetLg />
      </div>
      <OrderDetails/>
      <AddUser/>
      <EditUser/>
    </div>
  );
}
