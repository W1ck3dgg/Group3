import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "rgb(40, 61, 124)",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  logo: {},
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
  active: {
    textDecoration: "underline",
    textDecorationColor: "yellow",
  },
}));

export default useStyles;
