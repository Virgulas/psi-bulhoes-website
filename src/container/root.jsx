import Navb from "../components/nav";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

function Root() {
  return (
  <div className="root">
    <div className="navbar-fill"></div>
    <Navb />
    <div>
      <Outlet />
    </div>
    <Footer />
  </div>
  );
}

export default Root;