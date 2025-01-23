import { Outlet } from "react-router-dom";
import BarMenu from "../../components/BarMenu/BarMenu";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import DashboardUsers from "../../components/BarMenu/DashboardProducts";
import DashboardOrders from "../../components/BarMenu/DashboardOrders";

const AdminDashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content items-center justify-center">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 lg:bg-white text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li className="flex">
            <button className="text-3xl text-primary">
              <TbLayoutDashboardFilled></TbLayoutDashboardFilled>
              <p>Dashboard</p>
            </button>
          </li>
          <li>
            <BarMenu></BarMenu>
          </li>
          <li>
            <DashboardUsers></DashboardUsers>
          </li>
          <li>
            <DashboardOrders></DashboardOrders>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
