import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PageLayout from "./components/PageLayout";



const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/lessons" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="/lessons/grade1_2" element={<Home />} />
        <Route path="/lessons/grade3_4" element={<Home />} />
        <Route path="/lessons/grade5_6" element={<Home />} />
      </Route>
    </Route>,
  ])
);

export default router;
