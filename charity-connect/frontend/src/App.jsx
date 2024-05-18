import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharityList from './components/CharityList';
import CharityDetail from './components/CharityDetail';
import ApolloProvider from './ApolloProvider';
import { Container, Header } from './styles';

const App = () => (
  <ApolloProvider>
    <Router>
      <Container>
        <Header>Charity Connect</Header>
        <Switch>
          <Route exact path="/" component={CharityList} />
          <Route path="/charity/:id" component={CharityDetail} />
        </Switch>
      </Container>
    </Router>
  </ApolloProvider>
);

export default App;

