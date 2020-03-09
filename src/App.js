import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { Button } from '@rmwc/button';
import '@material/button/dist/mdc.button.css';

const theme = {
  primaryBackgroundColor: "orange",
  primaryTextColor: "gray",
  primaryFontFamily: "Comic Sans MS",
  dangerBackGroundColor: "red",
  dangerTextColor: "white",
  dangerFontFamily: "Impact, Charcoal, sans-serif"
}
const MySpecialComponent = styled(({ className, children, type, buttonType }) => (
  <Button
    label={children}
    type={type}
    className={className}
    raised={buttonType === 'primary' || buttonType === 'danger'}
  />
))`
    box-shadow:0px 0px 3px 4px red;
    margin-left: 1%;
    ${
  props => props.buttonType === 'primary' && css`
            font-style:italic;
            text-transform:capitalize;
            background:${props.theme.primaryBackgroundColor};
            color:${props.theme.primaryTextColor};
            font-family:${props.theme.primaryFontFamily};
        `
  }
  ${
  props => props.buttonType === 'danger' && css`
         font-style:bold;
         background:${props.theme.dangerBackGroundColor};
         color:${props.theme.dangerTextColor};
         font-family:${props.theme.dangerFontFamily};
     `
  }
`;
const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MySpecialComponent type="button" buttonType="primary">My Special Button</MySpecialComponent>
        <MySpecialComponent type="button" buttonType="danger">My Special Button</MySpecialComponent>
        <MySpecialComponent type="button" buttonType="unknown">My Special Button</MySpecialComponent>
      </ThemeProvider>
    </div>
  );
}
export default App;
