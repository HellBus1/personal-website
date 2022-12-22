import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { routes } from "lib/config/customRoute";
import Link from "next/link";
import { ReactElement, useState } from "react";
import AppBarItem from "./components/AppBarItem";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const CustomAppBar = (props: Props): ReactElement => {
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', zIndex: 99 }}>
      <Divider />
      <List>
        {routes.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return <>
    <Box component="nav">
      <AppBar component={'nav'} position="fixed">
        <Toolbar variant='dense'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 6.6, display: { sm: 'none' } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <Box sx={{
            display: { xs: 'none', sm: 'flex' },
            position: 'absolute',
            left: '5rem',
            right: '5rem',
            justifyContent: 'space-between'
          }}>

            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              {routes.map((item, index) => (
                <Link key={index} href={item.path}>
                  <AppBarItem itemTitle={item.name} index={index} />
                </Link>
              ))}
            </Box>


            <Box sx={{ right: 0 }}>
              <GitHubIcon />
              <LinkedInIcon sx={{ marginLeft: 2 }} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        open={isMobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  </>;
};

export default CustomAppBar;