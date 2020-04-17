import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Layout, NotFound } from "./components";

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route path="/peru" render={() => <div>Peru</div>} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
