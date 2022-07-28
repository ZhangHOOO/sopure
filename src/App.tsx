import { useResponsive } from "ahooks";
import { observable } from "mobx";
import { Provider } from "mobx-react";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import stores from "store/index";
import { PageLoader } from "./components/PageLoader";
const Home = lazy(() => import("./views/Home/index"));
const Login = lazy(() => import("./views/Login/index"));

const App: React.FC = (props) => {
  useResponsive();
  return (
    <Provider {...stores}>
      <BrowserRouter>
        <React.Fragment>
          <main style={{ paddingBottom: "100px", backgroundColor: "#e4ebf5" }}>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
              </Routes>
            </Suspense>
          </main>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
};
export default observable(React.memo(App));
// export default React.memo(App);
