import React from "react";
import { countSelector, incrementCount } from "../store/store";
import { connect } from "react-redux";
import { Observable } from "rxjs/Rx";
import styled from "styled-components";

// Components
import { P } from "./P";
import { Div } from "./Div";

const mapStateToProps = state => ({
  count: countSelector(state)
});

const mapDispatchToProps = dispatch => ({
  incrementCount(number) {
    dispatch(incrementCount(number));
  }
});

class Clicker extends React.Component {
  componentDidMount() {
    const button = document.querySelector(".incrementButton");
    Observable.fromEvent(button, "click")
      .scan(count => count, 0)
      .subscribe(() => this.props.incrementCount(1));
  }

  render() {
    const { count, className } = this.props;
    return (
      <Div className={`${className} row`}>
        <Div className="col-md-4">
          <h2>Welcome to React!</h2>
          <button className="incrementButton"> click!</button>
          <P> {count} </P>
        </Div>
        <Div className="col-md-4">
          <P> {count} </P>
        </Div>
        <Div className="col-md-4">
          <P> {count} </P>
        </Div>
      </Div>
    );
  }
}

// Style
const StyledClicker = styled(Clicker)`
  font-size: 2em;
`;

const ConnectedClicker = connect(mapStateToProps, mapDispatchToProps)(
  StyledClicker
);

export { ConnectedClicker };
