import React from "react";
import ReactDOM from "react-dom";
import Rx from "rxjs/Rx";
import { Provider, connect } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { bindActionCreators } from "redux";

// components
import { Div } from "./components/Div";
import { P } from "./components/P";

// store
import store, { countSelector, incrementCount } from "./store/store";

const mapStateToProps = state => ({
  count: countSelector(state)
});

const mapDispatchToProps = dispatch => ({
    incrementCount(number) {
        dispatch(incrementCount(number))
    }
});

class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const button = document.querySelector("button");
    Rx.Observable.fromEvent(button, "click")
      .scan(count => count, 0)
      .subscribe(() => this.props.incrementCount(1));
  }

  render() {
    const { count } = this.props;
    return (
      <Div className="grid-basics-example">
        <h2>Welcome to React!</h2>
        <button> click! </button>
        <P> {count} </P>
      </Div>
    );
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

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
