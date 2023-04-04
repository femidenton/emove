import { StyledSidebar } from "./styles/sidebar.styled";
import {FaTabletAlt, FaUserAlt, FaMoneyBill} from "react-icons/fa"
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const { pathname } = useLocation();
  
  return (
    <StyledSidebar>
      <h5>Main</h5>
      <ul>
        <li>
          <Link className={(pathname === "/" || pathname==="/driver") ? 'active' : 'deActive'} to="/">
            <FaTabletAlt className="sideIcon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className={pathname==="/drivers" ? 'active' : 'deActive'}  to="/drivers">
            <FaUserAlt className="sideIcon" />
            <span>Add a Driver</span>
          </Link>
        </li>
        <li>
          <Link className={pathname==="/pricing" ? 'active' : 'deActive'}  to="/pricing">
            <FaMoneyBill className="sideIcon" />
            <span>Pricing</span>
          </Link>
        </li>
      </ul>
    </StyledSidebar>
  );
}


export default Sidebar;
