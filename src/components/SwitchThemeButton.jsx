import React from "react";

const SwitchThemeButton = ({ className, switchTheme, themeName}) => (
  <button onClick={() => switchTheme(themeName)} className={`${className}`}> {themeName} </button>
);

export { SwitchThemeButton };
