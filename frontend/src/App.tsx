import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { MuiThemeProvider, ThemeOptions } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import indigo from "@material-ui/core/colors/indigo";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Help from './pages/Help';
import './App.css';

const themeConfig: ThemeOptions = {
  palette: {
    primary: indigo,
    secondary: green,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
};

function App() {
  return (
    <MuiThemeProvider theme={createTheme(themeConfig)}>
      <CssBaseline />
      <div style={{ height: "100vh" }}>
        <MainLayout>
          <Router>
            <Switch>
              <Route path="/help" component={Help} />
              <Route path="/#" component={Home} />
            </Switch>
          </Router>
        </MainLayout>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
