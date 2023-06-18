import { useAuth0 } from "@auth0/auth0-react";
import { Layout, PageLoader } from "components";
import { AppRoutes } from "routes";

export default function App() {
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <PageLoader />;
  }

  if (isAuthenticated) {
    return (
      <>
        <Layout />
        <AppRoutes />
      </>
    );
  } else {
    loginWithRedirect();
    return null;
  }
}
