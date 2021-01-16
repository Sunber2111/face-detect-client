import React, { Fragment, useEffect } from "react";
import "./index.scss";
import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routers from "../routers";
import PrivateRoute from "app/routers/PrivateRoute";
import { useSelector, useDispatch } from "react-redux";
import NotFound from "./NotFound";
import { RootState } from "../store";
import LoadingComponent from "./LoadingComponent";
import userAPI from "app/api/user";
import {
  checkCurrentSuccess,
  checkCurrentFail,
} from "feature/login/loginSlice";
import { IErrorFromServer } from "app/models/error";
import { showError } from "app/notification/notify";
import { history } from "../../";
import Login from "feature/login";
import Navigation from "feature/sidenavigation";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import NavBar from "feature/nav";
import ModalContainer from "app/common/modal/ModalContainer";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  const appLoaded = useSelector((s: RootState) => s.login.appLoaded);

  const dispath = useDispatch();

  useEffect(() => {
    userAPI
      .getCurrent()
      .then((value) => {
        dispath(checkCurrentSuccess(value));
      })
      .catch((err) => {
        const error = err as IErrorFromServer;
        if (error.code === 412) showError(error.description);
        dispath(checkCurrentFail());
        history.push("/");
      });
  }, [appLoaded]);

  if (!appLoaded) return <LoadingComponent content="Loading app..." />;

  return (
    <div id="app">
      <Route path="/" component={Login} exact={true} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <ModalContainer />
            <Grid className="main">
              <GridRow>
                <GridColumn computer="3" mobile="16" className="nav-slide">
                  <Navigation />
                </GridColumn>
                <GridColumn computer="13" mobile="16" className="main-content">
                  <NavBar />
                  <div className="app-content">
                    <Switch>
                      {routers.map((route) => (
                        <PrivateRoute
                          component={route.component}
                          path={route.path}
                        />
                      ))}
                      <Route component={NotFound} />
                    </Switch>
                  </div>
                </GridColumn>
              </GridRow>
            </Grid>
          </Fragment>
        )}
      />
      <ToastContainer />
    </div>
  );
};

export default withRouter(App);
