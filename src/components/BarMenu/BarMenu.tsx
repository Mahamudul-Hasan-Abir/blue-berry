import { FaUsersLine } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BarMenu = () => {
  return (
    <ul className="menu  rounded-box w-56 mt-5">
      <li>
        <details open>
          <summary className="text-xl text-primary hover:bg-primary hover:text-white">
            <FaUsersLine></FaUsersLine>
            <p>Users</p>
          </summary>
          <ul>
            <Link to="/admin/users">
              <li>
                <a>All Users</a>
              </li>
            </Link>
            <Link to="/admin/roles">
              <li>
                <a>Roles</a>
              </li>
            </Link>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default BarMenu;
