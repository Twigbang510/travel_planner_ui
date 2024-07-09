import {ChakraProvider} from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import App from "App";
import "index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import RootStore from "redux/root-store";
import reportWebVitals from "reportWebVitals";
import Fonts from "theme/chakra-font";
import {uiTheme} from "theme/chakra-theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.Fragment>
    <Provider store={RootStore}>
      <ChakraProvider theme={uiTheme}>
        <Fonts />
        <App />
      </ChakraProvider>
    </Provider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
