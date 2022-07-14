import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/Header/Header'
import Home from './components/pages/Home'
import Posts from './components/pages/Posts'
<<<<<<< HEAD
import Signup from './components/pages/Signup'
=======
import Events from './components/pages/Events'

>>>>>>> 7591b8508116cbecc5d5ce7e73f6a682d6f6657d



const client = new ApolloClient({
  uri: '/graphql',
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
            {/* <Route 
              path="/directory" 
              element={<Directory />}
            /> */}
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
