import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Header from "../Header";
import SubmitButton from "../Submit/SubmitButton";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import useStyles from "../style/ParaphrasingStyles"; // Import the styles

export default function Paraphrasing() {
  const classes = useStyles(); // Use the styles

  const [inputText, setInputText] = useState("");
  const [apiResponseText, setApiResponseText] = useState(
    "Nothing here yet, enter some text in the box above"
  );

  function setResponseText(apiResponse) {
    setApiResponseText(apiResponse);
  }

  return (
    <div className={classes.root}>
      <Header />
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Paraphrasing Tool
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {" Rewrite any text using AI."}
          {""}
        </Typography>

        <div className={classes.gridRoot}>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paper}>
                <form
                  className={classes.formRoot}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    label="Insert the text you would like to rewrite here"
                    placeholder="I love it when AI does all the work for me"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setInputText(e.target.value)}
                  />
                </form>
              </Paper>
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={2}>
              <div className={classes.primary}>
                <SubmitButton
                  inputText={inputText}
                  responseText={setResponseText}
                />
              </div>
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  variant="h6"
                  style={{ fontWeight: 700, marginBottom: "10px" }}
                >
                  {" "}
                  New Text:{" "}
                </Typography>
                <Divider variant="middle" />
                <Typography variant="h6" className={classes.paraphrasedText}>
                  {apiResponseText}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
