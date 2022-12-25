import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Chip, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { routes } from "lib/config/customRoute";
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
      <AppBar component={'nav'} position="absolute" elevation={0}  >
        <Toolbar variant='regular'>
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
            justifyContent: 'space-between',
          }}>

            <Box sx={{ display: 'flex', flexDirection: 'row', mt: '4px' }}>
              {routes.map((item, index) => (
                <AppBarItem itemTitle={item.name} index={index} path={item.path} />
              ))}
            </Box>


            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <Chip
                label="v1.0.0"
                onClick={() => { }}
                sx={{
                  backgroundColor: '#eef3f8',
                  mr: 2,
                }}
              />
              <Divider orientation='vertical' variant='middle' />
              <Box sx={{ ml: 2, mt: '4px' }} alignItems={'center'}>
                <Link href='https://github.com/HellBus1' target={'_blank'}>
                  <GitHubIcon sx={{ "&:hover": { color: '#333' }, color: 'text.disabled' }} />
                </Link>
                <Link href='https://www.linkedin.com/in/syubban/' target={'_blank'}>
                  <LinkedInIcon sx={{ marginLeft: 1.5, "&:hover": { color: '#006192' }, color: 'text.disabled' }} />
                </Link>
              </Box>
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