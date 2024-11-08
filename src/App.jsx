import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import NotifierProvider from "./components/Notifier/index.jsx";
import {
  ROOT,
  WIDGET_ROUTE,
  CREATE_ROUTE,
  USER_GUIDE_ROUTE,
  EDIT_ROUTE,
  OLD_WIDGET_ROUTE,
  TOOL_ROUTE,
  PRODUCT_ROUTE,
  CREATE_VIS,
  CREATE_DASH,
} from "./constants/routes";
import { getUserInfo } from "./store/user";
import Loader from "./components/Loader";
import PasswordPage from "./pages/PasswordPage";
import { ENV_BUSINESS_SALES_DOMAIN, ENV_DATA_SCIENCE_DOMAIN } from "./config";
import CreateDiagramPageV2 from "./pages/CreateDiagramPageV2/index.jsx";
import DashboardCreatPage from "./pages/DashboardCreatPage/index.jsx";
import PortfolioConstructor from "./pages/PortfolioConstructor/index.jsx";
import DashboardCompetitors from "./pages/DashboardCompetitors/index.jsx";
import ErrorPage from "./permissions/ErrorPage.jsx";
import IsAuthenticatedOnly from "./permissions/IsAuthenticatedOnly.jsx";

// Dynamic imports
const DeployAdminPanel = React.lazy(() =>
  import(
    "./components/AdminPanelsConstructor/deploy-panel/DeployAdminPanel.jsx"
  )
);
const BusinessSales = React.lazy(() => import("./pages/BusinessSales"));
const DataScience = React.lazy(() => import("./pages/DataScience"));
const Ecosystem = React.lazy(() => import("./pages/Ecosystem"));
const FileUploadTest = React.lazy(() => import("./pages/FileUploadTest"));
const MacroparametersPage = React.lazy(() =>
  import("./pages/MacroparametersPage")
);
const ViewPage = React.lazy(() => import("./pages/View/index"));
const MainPage = React.lazy(() => import("./pages/MainPage/index"));
const UserGuide = React.lazy(() => import("./pages/UserGuide/index"));
const CreatePage = React.lazy(() => import("./pages/CreateDiagramPage/index"));
const EditPage = React.lazy(() => import("./pages/EditDiagramPage/index"));
const DocumentCreator = React.lazy(() =>
  import("./components/DocumentCreator/DocumentCreator")
);
const DocumentCreatorV2 = React.lazy(() =>
  import("./components/DocumentCreatorV2/DocumentCreatorV2")
);
const DocumentCreatorV3 = React.lazy(() =>
  import("./components/DocumentCreatorV3/DocumentCreatorV3")
);
const AdminPanelsConstructor = React.lazy(() =>
  import("./components/AdminPanelsConstructor/AdminPanelsConstructor")
);
const PageBuilder = React.lazy(() =>
  import("./components/PageBuilder/PageBuilder")
);
const AdminPanelsBlackConstructor = React.lazy(() =>
  import("./components/AdminPanelsBlackConstructor/AdminPanelsBlackConstructor")
);
const UkMapConstructor = React.lazy(() =>
  import("./components/UkMapChart/UkMapConstructor")
);

function Inner() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = (status) => {
    setIsAuthenticated(status);
  };

  if (window.location.host === ENV_BUSINESS_SALES_DOMAIN) {
    return (
      <Router>
        <Routes>
          <Route path={`/business-sales`} element={<BusinessSales />} />
          <Route path={ROOT} element={<BusinessSales />} />
        </Routes>
      </Router>
    );
  }

  if (window.location.host === ENV_DATA_SCIENCE_DOMAIN) {
    return (
      <div>
        {isAuthenticated ? (
          <Router>
            <Routes>
              <Route path="/" element={<IsAuthenticatedOnly />}>
                <Route path={`/data-science`} element={<DataScience />} />
                <Route path={ROOT} element={<DataScience />} />
              </Route>
            </Routes>
          </Router>
        ) : (
          <PasswordPage onPasswordSubmit={handlePasswordSubmit} />
        )}
      </div>
    );
  }

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path={`/authorization`} element={<ErrorPage />} />
          <Route path={`${PRODUCT_ROUTE}:slug/:page?`} element={<ViewPage />} />
          <Route path="/" element={<IsAuthenticatedOnly />}>
            <Route path={`/data-science`} element={<DataScience />} />
            <Route path={`/business-sales`} element={<BusinessSales />} />
            <Route path={`/ecosystem`} element={<Ecosystem />} />
            <Route path={`${WIDGET_ROUTE}:slug`} element={<ViewPage />} />
            <Route path={`${OLD_WIDGET_ROUTE}:slug`} element={<ViewPage />} />
            <Route path={`${TOOL_ROUTE}:slug`} element={<ViewPage />} />

            <Route
              path={`${CREATE_ROUTE}:diagramType`}
              element={<CreatePage />}
            />
            <Route
              path={`/panel-deploy/:panelSlug`}
              element={<DeployAdminPanel />}
            />
            <Route
              path="/portfolio-constructor/:type?/:slug?"
              element={<PortfolioConstructor />}
            />
            <Route
              path="/dashboard-competitor"
              element={<DashboardCompetitors />}
            />
            <Route
              path={`${CREATE_VIS}:diagramType?/:slug?`}
              element={<CreateDiagramPageV2 />}
            />
            <Route
              path={`${CREATE_DASH}:slug?`}
              element={<DashboardCreatPage />}
            />

            <Route
              path={`${EDIT_ROUTE}:diagramType?/:slug?`}
              element={<EditPage />}
            />
            <Route path={USER_GUIDE_ROUTE} element={<UserGuide />} />
            <Route
              path={`${CREATE_ROUTE}:diagramType/DocumentCreatorEdit`}
              element={<DocumentCreator isEditMode={true} />}
            />
            <Route
              path={`${CREATE_ROUTE}:diagramType/DocumentCreatorV2Edit`}
              element={<DocumentCreatorV2 isEditMode={true} />}
            />
            <Route
              path={`${CREATE_ROUTE}:diagramType/DocumentCreatorV3Edit`}
              element={<DocumentCreatorV3 isEditMode={true} />}
            />
            <Route
              path={`${CREATE_ROUTE}:diagramType/AdminPanelsConstructorEdit`}
              element={<AdminPanelsConstructor isEditMode={true} />}
            />
            <Route
              path={`${CREATE_ROUTE}:diagramType/PageBuilderEdit`}
              element={<PageBuilder isEditMode={true} />}
            />
            <Route
              path={`${CREATE_ROUTE}:diagramType/AdminPanelsBlackConstructorEdit`}
              element={<AdminPanelsBlackConstructor isEditMode={true} />}
            />
            <Route
              path={`${CREATE_ROUTE}:diagramType/UkMapChartEdit`}
              element={<UkMapConstructor isEditMode={true} />}
            />
            <Route
              path={`/macroparameters`}
              element={<MacroparametersPage />}
            />
            <Route path="/test-file-upload" element={<FileUploadTest />} />
            <Route path={ROOT} element={<MainPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NotifierProvider>
        <Inner />
      </NotifierProvider>
    </Provider>
  );
}

export default App;
