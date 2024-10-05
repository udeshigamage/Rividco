import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Auth/Login";
import { Home } from "../Web/Home";
import Adminlayout from "../Admin/Adminlayout";
import Customermain from "../Admin/Customer/Customermain";
import Vendormain from "../Admin/Vendor/Vendormain";
import Dashboard from "../Admin/Dashboard";
import Projectmain from "../Admin/Project/Projectmain";
import CIAmain from "../Admin/CIA/CIAmain";
import Systemusermain from "../Admin/Systemuser/Systemusermain";
import Vendoritemmain from "../Admin/Vendoritem/Vendoritemmain";
import Projectitemmain from "../Admin/Projectitem/Projectitemmain";
import Projectmajor from "../Admin/Project/Projectmajor";
import { Signup } from "../Auth/Signup";
import PrivateRoutes from "./Privateroutes";
// Import PrivateRoute

const Approutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/projects/main" element={<Projectmajor />} />

        {/* Protected Admin Routes */}
        <Route element={<PrivateRoutes />}>
          {" "}
          {/* Add PrivateRoute here */}
          <Route
            path="/app/*"
            element={
              <Adminlayout>
                <Routes>
                  <Route path="" element={<Dashboard />} />
                  <Route path="customer" element={<Customermain />} />
                  <Route path="vendor" element={<Vendormain />} />
                  <Route path="vendoritem" element={<Vendoritemmain />} />
                  <Route path="projects" element={<Projectmain />} />
                  <Route path="cia" element={<CIAmain />} />
                  <Route path="systemusers" element={<Systemusermain />} />
                  <Route
                    path="projectitem"
                    element={<Projectitemmain project={{}} />}
                  />
                </Routes>
              </Adminlayout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;
