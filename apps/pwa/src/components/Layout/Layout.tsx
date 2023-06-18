import { Box } from "@mui/material";

import "../../providers/theme/styles/global.scss";
import { SideBar } from "./SideBar";
import { TitleBar } from "./TitleBar";

export const Layout = () => {  
  return (
    <Box>
      <TitleBar />
      <SideBar />
    </Box>
  );
};
