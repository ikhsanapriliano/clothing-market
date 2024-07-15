import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Dashboard, Register, Login, Activation } from "../pages/index"
import Header from "../global/components/Header";
import Footer from "../global/components/Footer";
import Authentication from "../global/middlewares/Authentication";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Authentication />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify/:id" element={<Activation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
