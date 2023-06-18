import { Route, Routes } from "react-router-dom";

import { AuthGuard } from "components";
import { HomePage, SettingsPage, UsersPage } from "pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthGuard component={HomePage} />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};
