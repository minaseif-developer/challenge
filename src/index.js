import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Jss from "./provider/jss";
import Theme from "./provider/theme";
import jss from "jss";
import reset from "reset-jss";
import { SnackbarProvider } from "notistack";

import "./style.css";

jss.createStyleSheet(reset).attach();

ReactDOM.render(
  <React.StrictMode>
    <Jss>
      <Theme>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </Theme>
    </Jss>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
