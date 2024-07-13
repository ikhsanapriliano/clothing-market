import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Dashboard } from "../pages/index"
import Header from "../global/components/Header";
import Footer from "../global/components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
