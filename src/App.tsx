import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageLoader } from "./components/PageLoader";
import { Provider } from "mobx-react";
import stores from "store/index";
import { observable } from "mobx";
import { useResponsive } from "ahooks";
const Home = lazy(() => import("./views/Home/index"));
const Login = lazy(() => import("./views/Login/index"));

const App: React.FC = (props) => {
  useResponsive();
  return (
    <Provider {...stores}>
      <BrowserRouter>
        <React.Fragment>
          <main style={{ paddingBottom: "100px" }}>
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
