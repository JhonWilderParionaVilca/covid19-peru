import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import { Bar } from "react-chartjs-2";

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

const BarGraph = ({ data: { confirmados, recuperados, muertos }, country }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      <Paper elevation={3}>
        {confirmados ? (
          <Bar
            data={{
              labels: ["Infectados", "recuperados", "muertos"],
              datasets: [
                {
                  label: "Personas",
                  backgroundColor: [
                    "rgba(0, 0, 255, 0.5)",
                    "rgba(0, 255, 0, 0.5)",
                    "rgba(255, 0, 0, 0.5)",
                  ],
                  data: [confirmados, recuperados, muertos],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Casos en ${country}` },
            }}
          />
        ) : null}
      </Paper>
    </Grid>
  );
};

export default BarGraph;
