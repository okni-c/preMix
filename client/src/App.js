import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleComment from './pages/SingleComment';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Discover from './pages/Discover';
import Landing from './pages/Landing';

import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile/:username?" component={Profile} />
          <Route exact path="/comment/:id" component={SingleComment} />

          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
