import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  paraphrasedText: {
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
  },
  gridRoot: {
    flexGrow: 1,
  },
  formRoot: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  primary: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
