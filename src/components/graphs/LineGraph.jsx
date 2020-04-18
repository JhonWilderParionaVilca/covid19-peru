import React, { useEffect, useState } from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import { Line, defaults } from "react-chartjs-2";

import api from "../../api";

defaults.global.maintainAspectRatio = false;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      width: "90%",
      minHeight: "50vh",
    },
  },
}));

const LineGraph = () => {
  const classes = useStyles();
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchedDailyData = async () => {
      setDailyData(await api.fetchDailyData());
    };

    fetchedDailyData();
  }, []);
  return (
    <Grid item xs={12} className={classes.root}>
      <Paper elevation={3}>
        {dailyData.length ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => date),
              datasets: [
                {
                  data: dailyData.map(({ confirmed }) => confirmed),
                  label: "Infectados",
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  fill: true,
                  lineTension: 1,
                  borderCapStyle: "butt",
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: "miter",
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 2,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                },
                {
                  data: dailyData.map(({ deaths }) => deaths),
                  label: "Muertos",
                  borderColor: "red",
                  backgroundColor: "rgba(255,0,0,0.5)",
                  fill: true,
                  lineTension: 1,
                  borderCapStyle: "butt",
                  borderDashOffset: 0.0,
                  borderJoinStyle: "miter",
                  pointBorderColor: "rgba(255,0,0,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 2,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(255,0,0,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                },
              ],
            }}
          />
        ) : null}
      </Paper>
    </Grid>
  );
};

export default LineGraph;
