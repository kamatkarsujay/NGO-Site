import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import NGOList from "./pages/NGOList";
import ChildList from "./pages/ChildList";
import ChildDetails from "./pages/ChildDetails";
import DashboardAdmin from "./pages/DashboardAdmin";
import AddSchemeForm from "./pages/AddSchemeForm";
import AllChildList from "./pages/AllChildList";
import NGODetails from "./pages/NGODetails";
import SchoolList from "./pages/SchoolList";
import SchoolDetails from "./pages/SchoolDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboardAdmin" element={<DashboardAdmin />} />
        <Route exact path="/ngolist" element={<NGOList />} />
        <Route exact path="/childlist" element={<ChildList />} />
        <Route exact path="/adminChildList" element={<AllChildList />} />
        <Route exact path="/childDetails/:id" element={<ChildDetails />} />
        <Route exact path="/editChild/:id" element={<AddSchemeForm />} />
        <Route exact path="/ngoDetails/:id" element={<NGODetails />} />
        <Route exact path="/schoolDetails/:id" element={<SchoolDetails />} />
        <Route exact path="/adminSchoolList" element={<SchoolList />} />
      </Routes>
    </div>
  );
};
export default App;
