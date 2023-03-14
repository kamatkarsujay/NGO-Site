import { Route, Routes } from "react-router-dom";
import NGOList from "../pages/NGOList";
import ChildList from "../pages/ChildList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/ngolist" element={<NGOList />} />
      <Route path="/childlist" element={<ChildList />} />
    </Routes>
  );
};
export default AppRoutes;
