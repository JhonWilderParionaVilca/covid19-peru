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

import api from "./api";

export default class extends Component {
  state = {
    dataCovid: {
      confirmados: 0,
      recuperados: 0,
      muertos: 0,
    },
    updatedDate: "",
    country: "",
  };

  async componentDidMount() {
    try {
      const {
        confirmed,
        deaths,
        recovered,
        lastUpdate,
      } = await api.fetchData();

      this.setState({
        dataCovid: {
          confirmados: confirmed,
          recuperados: recovered,
          muertos: deaths,
        },
        updatedDate: lastUpdate,
      });
    } catch (error) {
      return error;
    }
  }

  handleCountryChange = async (country) => {
    if (country !== this.state.country) {
      try {
        const {
          confirmed,
          deaths,
          recovered,
          lastUpdate,
        } = await api.fetchData(country);

        this.setState({
          dataCovid: {
            confirmados: confirmed,
            recuperados: recovered,
            muertos: deaths,
          },
          updatedDate: lastUpdate,
          country: country,
        });
      } catch (error) {
        return error;
      }
    }
  };

  render() {
    const { dataCovid, updatedDate, country } = this.state;

    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return (
                  <Fragment>
                    <Picker
                      {...props}
                      handleCountryChange={this.handleCountryChange}
                      country={country}
                    />
                    {updatedDate !== "" ? (
                      <InfoCard
                        data={dataCovid}
                        date={updatedDate}
                        country={country}
                      />
                    ) : (
                      <p> Cargando... </p>
                    )}

                    {country ? (
                      <BarGraph data={dataCovid} country={country} />
                    ) : (
                      <LineGraph />
                    )}
                  </Fragment>
                );
              }}
            />

            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
