import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Comedy from "./pages/genres/Comedy";
import History from "./pages/genres/History";
import Action from "./pages/genres/Action";
import Romance from "./pages/genres/Romance";
import Animation from "./pages/genres/Animation";
import Horror from "./pages/genres/Horror";
import Sci_Fi from "./pages/genres/SCI-FI";
import Year from "./pages/Year";
import Ratings from "./pages/Ratings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/movie/:id" element={<Detail />} />
      <Route path="/movie/genre/action" element={<Action />} />
      <Route path="/movie/genre/animation" element={<Animation />} />
      <Route path="/movie/genre/comedy" element={<Comedy />} />
      <Route path="/movie/genre/romance" element={<Romance />} />
      <Route path="/movie/genre/history" element={<History />} />
      <Route path="/movie/genre/horror" element={<Horror />} />
      <Route path="/movie/genre/sci-fi" element={<Sci_Fi />} />
      <Route path="/movie/recent" element={<Year />} />
      <Route path="/movie/rating" element={<Ratings />} /> */}
    </Routes>
  );
}

export default App;
