import React from "react";
import styled from "styled-components";
import { ConnectedClicker } from "./Clicker";
import { Div } from "./Div";
import { SwitchThemeButton } from "./SwitchThemeButton";
import { connect } from "react-redux";

// action
import { switchTheme } from "../store/store";
import { P } from "./P";

const mapDispatchToProps = dispatch => ({
  switchTheme(name) {
    dispatch(switchTheme(name));
  }
});

const Content = ({ className, switchTheme }) => {
  console.log(switchTheme);
  return (
    <Div className={`${className} container`}>
      <P style={{ display: "inline" }}> themes </P>
      <SwitchThemeButton switchTheme={switchTheme} themeName="red" />
      <SwitchThemeButton switchTheme={switchTheme} themeName="blue" />
      <Div className="row">
        <Div className="col-xs-12" />
      </Div>
      <ConnectedClicker />
      <Div className="row">
        <div className="col-md-6" />
      </Div>
      <Div className="row">
        <Div className="col-xs-12" />
      </Div>
    </Div>
  );
};

const StyledContent = styled(Content)`
  color: ${props => props.theme.fontColor};
  font-family: ${props => props.theme.font};
`;

const ConnectedContent = connect(null, mapDispatchToProps)(StyledContent);

export { ConnectedContent };
