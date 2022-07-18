import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header/Header'
import Home from './components/pages/Home'
import Posts from './components/pages/Posts'
import AddPost from './components/pages/AddPost'
import Signup from './components/pages/Signup'
import Events from './components/pages/Events'
import Login from './components/pages/Login'
import Directory from './components/pages/Directory'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
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
      <Header></Header>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh">
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            <Route 
              path="/posts" 
              element={<Posts />}
            />
            <Route 
            path="/signup"
            element={<Signup />}
            />
             <Route 
            path="/login"
            element={<Login />}
            />
             <Route 
            path="/addpost"
            element={<AddPost />}
            />
            <Route 
              path="/directory" 
              element={<Directory />}
            /> 
            <Route 
              path="/events"
              element={<Events />}
            /> 
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
