import React from "react";
import { Switch, Route } from "react-router-dom";

export const renderComponent = (route, match) => {
  class RouteContent extends React.Component {
    componentWillMount() {
      route.preProcess && route.preProcess();
    }

    render() {
      return <route.component {...route.props} match={match} />;
    }
  }

  return <RouteContent />;
};

export const renderRoutes = routes => {
  return routes ? (
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={({ match }) => renderComponent(route, match)}
        />
      ))}
    </Switch>
  ) : null;
};
