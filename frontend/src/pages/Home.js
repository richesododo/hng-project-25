import React from "react";
// import { Navbar } from "../components/general";
// import Footer from "../components/general/otherfooter/Footer";
import LandingPage from "../components/landingpage/LandingPage";
import useScreenSize from "../hooks/useScreenSize";
import { Navbar, Footer } from "components/general";
// import Logout from "./Logout";

const Home = () => {
  const { screenWidth } = useScreenSize();
  const mobile = screenWidth <= 690;
  const tablet = screenWidth <= 1024;

  return (
    <div>
      <Navbar mobile={mobile} tablet={tablet} />

      <LandingPage />
      <Footer mobile={mobile} tablet={tablet} />

      {/* <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Logout
        </Button>

        <Logout show={modalShow} onHide={() => setModalShow(false)} />
      </> */}
    </div>
  );
};

export default Home;
