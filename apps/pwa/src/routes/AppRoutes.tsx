import { Route, Routes } from "react-router-dom";

import { HomePage, SettingsPage, UsersPage } from "pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};
