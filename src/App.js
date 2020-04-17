import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  Layout,
  NotFound,
  Picker,
  InfoCard,
  LineGraph,
  BarGraph,
} from "./components";

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <Fragment>
                    <Picker />
                    <InfoCard />
                    <LineGraph />
                    <BarGraph />
                  </Fragment>
                );
              }}
            />
            <Route path="/peru" render={() => <div>Peru</div>} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
