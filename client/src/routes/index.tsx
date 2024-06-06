import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {Home, Dashboard} from "../pages/index"
import Header from "../components/sections/header";
import Footer from "../components/sections/footer";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
