import { Layout } from "components";
import { ThemeProvider, TrpcProvider } from "providers";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "routes";

function App() {
  return (
    <ThemeProvider>
      <TrpcProvider>
        <BrowserRouter>
          <Layout />
          <AppRoutes />
        </BrowserRouter>
      </TrpcProvider>
    </ThemeProvider>
  );
}

export default App;
