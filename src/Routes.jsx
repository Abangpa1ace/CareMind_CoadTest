import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './Styles/reset';
import theme from './Styles/theme';
import Main from './Pages/Main';
import MobileMenu from './Pages/Set1/MobileMenu';
import FontSizeButton from './Pages/Set1/FontSizeButton';

function Routes() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <GlobalReset />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/1-1" component={MobileMenu} />
          <Route exact path="/1-2" component={FontSizeButton} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default Routes;