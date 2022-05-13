import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
