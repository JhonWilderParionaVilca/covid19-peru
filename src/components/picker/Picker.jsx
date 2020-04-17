import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  withStyles,
  InputBase,
  makeStyles,
  NativeSelect,
} from "@material-ui/core";

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
    // Use the system font instead of the default Roboto font.
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
  margin: {
    width: "25ch",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Picker = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid item xs={12}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="select-country">
          Paises <span></span> 🌎{" "}
        </InputLabel>
        <NativeSelect
          id="select-country"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="Global" value={0}>
            Global
          </option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Grid>
  );
};

export default Picker;
