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
import CreateRide from "./pages/CreateRide"

import { useAuth } from './contexts/AuthContext';
import MyRides from "./pages/MyRides";
import Profile from "./pages/Profile";

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

        <Route exact path="/create-ride" element={
          <PrivateRoute>
            <CreateRide />
          </PrivateRoute>
        } />

        <Route exact path="/my-rides" element={
          <PrivateRoute>
            <MyRides />
          </PrivateRoute>
        } />

        <Route exact path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;