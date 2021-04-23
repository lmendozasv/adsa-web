import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { dashboard as dashboardRoutes, auth as authRoutes } from "./index";

import DashboardLayout from "../layouts/Dashboard";
import AuthLayout from "../layouts/Auth";
// import Page404 from "../pages/auth/Page404";
import Page404 from "../pages/auth/SignInSide";

const isLogged = ()=>{
  
  var tk = "";
  tk = localStorage.getItem("token");
  if (tk != null && tk.length >0 ){
    console.log("statex:  "+tk);
    return false;
  }
  else{
    console.log("statex: none ->  "+tk);
    return true;
  }
  
}

const childRoutes = (Layout, routes) =>
  routes.map(({ children, path, component: Component }, index) =>
    children ? (
      // Route item with children
      children.map(({ path, component: Component }, index) => (
        <Route
          key={index}
          path={path}
          exact
          render={props => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      ))
    ) : (
      // Route item without children
      <Route
        key={index}
        path={path}
        exact
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  );

const Routes = () => (  
  <Router>
    <Switch>
      {childRoutes(DashboardLayout, dashboardRoutes)}
      {childRoutes(AuthLayout, authRoutes)}            
        {
        isLogged()?
        <AuthLayout>
          <Page404/>
          </AuthLayout>
        :        
        <DashboardLayout/>      
        }
    </Switch>
  </Router>
);

const RoutesV20 = () => {
  if (isLogged())
    return <Router>
      <Switch>      
      {childRoutes(AuthLayout, authRoutes)}   
      <AuthLayout>
          <Page404/>
          </AuthLayout>  
      </Switch> 
</Router> ;
  else
    return <Router>
      <Switch>
            {childRoutes(DashboardLayout, dashboardRoutes)}
            <DashboardLayout/>      
            </Switch>
      </Router>;
};

const RoutesV2 = isLogged() ?  
<Router>
      <Switch>      
      {childRoutes(AuthLayout, authRoutes)}   
      <AuthLayout>
          <Page404/>
          </AuthLayout>  
      </Switch> 
</Router> : <Router>
<Switch>
      {childRoutes(DashboardLayout, dashboardRoutes)}
      <DashboardLayout/>      
      </Switch>
</Router>;

export default RoutesV20;
