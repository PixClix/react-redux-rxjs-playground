import React from "react";
import Rx from "rxjs";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { ThemeProvider } from "styled-components";

// components
import { ConnectedContent } from './components/Content';

// store
import store, { themeSelector } from "./store/store";

const mapStateToProps = state => {
    console.log("state ", state);
    return {
        theme: themeSelector(state)
    }
};

const App  = ({ theme }) =>
    <ThemeProvider theme={theme}>
        <ConnectedContent />
    </ThemeProvider>;

const ConnectedApp = connect(mapStateToProps, null)(App);

export const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
          <ConnectedApp />
      </Provider>
    </AppContainer>,
    document.getElementById("App")
  );
};
