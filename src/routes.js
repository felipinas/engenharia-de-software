import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/login" element={<Login />} />

        <Route exact path="/signup" element={<SignUp />} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;