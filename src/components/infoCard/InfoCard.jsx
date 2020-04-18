import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Countup from "react-countup";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    justifyItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(3),
      width: theme.spacing(20),
    },
  },
}));

const InfoCard = ({ data, date, country }) => {
  const classes = useStyles();
  const categories = Object.keys(data);

  return (
    <section>
      <Typography component="h2" variant="h6" align="center" color="secondary">
        {country}
      </Typography>

      <Grid item xs={12} className={classes.root}>
        {categories.map((category, index) => (
          <Paper key={index} elevation={3} component="article">
            <Typography
              color="textPrimary"
              gutterBottom
              align="center"
              component="h2"
            >
              {category}
            </Typography>
            <Typography
              component="h3"
              variant="h6"
              align="center"
              color="secondary"
            >
              <Countup
                start={0}
                end={data[category]}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography component="p" variant="caption" color="textSecondary">
              {`Actualizado a ${date}`}
            </Typography>
          </Paper>
        ))}
      </Grid>
    </section>
  );
};

export default InfoCard;
