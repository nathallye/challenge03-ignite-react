import { Routes, Route} from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";

import { HomePage } from "./pages/HomePage";
import { PostInfoPage } from "./pages/PostInfoPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/PostInfo/:issueNumber" element={<PostInfoPage />} />
      </Route>
    </Routes>
  );
};
