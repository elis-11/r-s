import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Favour } from "./pages/Favour";
import { Home } from "./pages/Home";
import { Effect } from "./pages/hooks/useEffekt";
import { State } from "./pages/hooks/useState";

export const App = () => {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favour" element={<Favour />} />
      <Route path="/state" element={<State />} />
      <Route path="/effect" element={<Effect />} />
    </Routes>
    </>
  );
};
