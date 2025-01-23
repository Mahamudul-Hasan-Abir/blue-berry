import { AiFillShop } from "react-icons/ai";
import { Link } from "react-router-dom";

const DashboardProducts = () => {
  return (
    <ul className="menu rounded-box w-56">
      <li>
        <details open>
          <summary className="text-xl text-primary hover:bg-primary hover:text-white">
            <AiFillShop></AiFillShop>
            <p>Products</p>
          </summary>
          <ul>
            <Link to="/admin/products">
              <li>
                <a>All Products</a>
              </li>
            </Link>
            <Link to="/admin/add-product">
              <li>
                <a>Add Products</a>
              </li>
            </Link>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default DashboardProducts;
