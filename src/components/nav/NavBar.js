import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = (props) => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">
          NSS Kennels
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/locations">
          Locations
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/animals">
          Animals
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/customers">
          Customers
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="employees">
          Employees
        </Link>
      </li>
      {localStorage.getItem("kennel_user") ? (
        <li className="navbar__item navbar__logout">
          <Link
            className="navbar__link"
            to=""
            onClick={() => {
              localStorage.removeItem("kennel_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
