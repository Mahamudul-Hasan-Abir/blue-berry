import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import NavBar2 from "../../components/NavBar/NavBar2";
import Footer from "../../components/Footer/Footer";
import Footer2 from "../../components/Footer/Footer2";

const MainLayout = () => {
  return (
    <>
      <NavBar></NavBar>
      <NavBar2></NavBar2>
      <Outlet></Outlet>
      <Footer></Footer>
      <Footer2></Footer2>
    </>
  );
};

export default MainLayout;
