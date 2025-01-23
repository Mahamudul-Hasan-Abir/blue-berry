import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DashboardOrders = () => {
  return (
    <ul className="menu rounded-box w-56 ">
      <li>
        <details open>
          <summary className="text-xl text-primary hover:bg-primary hover:text-white">
            <FaBagShopping></FaBagShopping>
            <p>Orders</p>
          </summary>
          <ul>
            <Link to="orders">
              <li>
                <a>All Orders</a>
              </li>
            </Link>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default DashboardOrders;
