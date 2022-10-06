import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Favour } from "./pages/Favour";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favour" element={<Favour />} />
    </Routes>
    </>
  );
};
