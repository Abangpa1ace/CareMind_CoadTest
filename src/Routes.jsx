import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './Styles/reset';
import theme from './Styles/theme';
import Main from './Pages/Main';

function Routes() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <GlobalReset />
        <Switch>
          <Route exact path="/" component={Main} />

        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default Routes;