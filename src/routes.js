import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch
}
from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Feed from "./pages/Feed";

import { useAuth } from './contexts/AuthContext';

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function Routes() {
  const { currentUser } = useAuth();

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" element={!currentUser ? <Home /> : <Navigate to="/feed" />} />

        <Route exact path="/login" element={!currentUser ? <Login /> : <Navigate to="/feed" />} />

        <Route exact path="/signup" element={!currentUser ? <SignUp /> : <Navigate to="/feed" />} />

        <Route exact path="/feed" element={
          <PrivateRoute>
            <Feed />
          </PrivateRoute>
        } />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;