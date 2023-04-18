import { Routes, Route} from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { PostInfo } from "./pages/PostInfo";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/PostInfo/:id" element={<PostInfo />} />
      </Route>
    </Routes>
  );
};
