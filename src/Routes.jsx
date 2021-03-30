import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './Styles/reset';
import theme from './Styles/theme';
import Main from './Pages/Main';
import MobileMenu from './Pages/Set1/MobileMenu';
import FontSizeButton from './Pages/Set1/FontSizeButton';
import PieChart from './Pages/Set2/PieChart';
import ReduxLogin from './Pages/Set2/ReduxLogin';

function Routes() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <GlobalReset />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/1-1" component={MobileMenu} />
          <Route exact path="/1-2" component={FontSizeButton} />
          <Route exact path="/2-2" component={PieChart} />
          <Route exact path="/2-3" component={ReduxLogin} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default Routes;