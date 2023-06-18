import { AppState, Auth0Provider } from "@auth0/auth0-react";
import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

const env = import.meta.env;

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({
  children,
}: PropsWithChildren<AuthProviderProps>): JSX.Element | null => {
  const navigate = useNavigate();

  const domain = env.REACT_APP_AUTH0_DOMAIN;
  const clientId = env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = env.REACT_APP_AUTH0_CALLBACK_URL;
  const audience = env.REACT_APP_AUTH0_AUDIENCE;

  console.log(env);

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri && audience)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience: audience,
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};