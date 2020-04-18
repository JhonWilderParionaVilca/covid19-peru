import React, { useState, useEffect } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  withStyles,
  InputBase,
  makeStyles,
  NativeSelect,
} from "@material-ui/core";

import api from "../../api";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    justifyContent: "center",
  },
  margin: {
    width: "auto",
  },
}));

const Picker = ({ handleCountryChange, country }) => {
  const classes = useStyles();

  const [fetchedCountriesName, setFetchedCountriesName] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      const data = await api.fetchNameCountries();
      setFetchedCountriesName(data);
    };

    fetchedData();
  }, [setFetchedCountriesName]);

  const handleChange = (event) => {
    handleCountryChange(event.target.value);
  };

  return (
    <Grid item xs={12} className={classes.root}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="select-country">
          Paises <span></span> 🌎{" "}
        </InputLabel>
        <NativeSelect
          id="select-country"
          value={country}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value="global">Global</option>

          {fetchedCountriesName.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Grid>
  );
};

export default Picker;
