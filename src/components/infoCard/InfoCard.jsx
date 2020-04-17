import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    justifyItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  },
}));

const InfoCard = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      <Paper elevation={3}>Desde InfoCard</Paper>
      <Paper elevation={3}>Desde InfoCard</Paper>
      <Paper elevation={3}>Desde InfoCard</Paper>
    </Grid>
  );
};

export default InfoCard;
