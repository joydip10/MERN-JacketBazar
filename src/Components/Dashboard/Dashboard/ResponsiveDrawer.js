import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import ManageOrders from '../ManageOrders/ManageOrders';
import Pay from './../Pay/Pay';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from './../../AdminRoute/AdminRoute';

const drawerWidth = 240;
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();
  const history = useHistory();
  console.log(admin)
  const drawer = (
    <div>
      <Toolbar />

      <List>
        <ListItem className="mx-5">
          <Button variant="success" onClick={() => history.push('/home')}>Home</Button>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i class="fas fa-shopping-cart"></i>
          </ListItemIcon>
          <ListItemText primary={"My Orders"} as={Link} to={`${url}/myOrders`} sx={{ textDecoration: 'none', color: 'black' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <i class="fas fa-star"></i>
          </ListItemIcon>
          <ListItemText primary={"Add Review"} as={Link} to={`${url}/addReview`} sx={{ textDecoration: 'none', color: 'black' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <i class="fas fa-comment-dollar"></i>
          </ListItemIcon>
          <ListItemText primary={"Pay"} as={Link} to={`${url}/pay`} sx={{ textDecoration: 'none', color: 'black' }} />
        </ListItem>
        {(admin === true) &&
          <ListItem button>
            <ListItemIcon>
              <i class="fas fa-user-shield"></i>
            </ListItemIcon>
            <ListItemText primary={"Make Admin"} as={Link} to={`${url}/makeAdmin`} sx={{ textDecoration: 'none', color: 'black' }} />
          </ListItem>}


        {(admin === true) &&
          <ListItem button>
            <ListItemIcon>
              <i class="fas fa-tasks"></i>
            </ListItemIcon>
            <ListItemText primary={"Manage Orders"} as={Link} to={`${url}/manageOrders`} sx={{ textDecoration: 'none', color: 'black' }} />
          </ListItem>}

        {(admin === true) &&
          <ListItem button>
            <ListItemIcon>
              <i class="fab fa-product-hunt"></i>
            </ListItemIcon>
            <ListItemText primary={"Manage Products"} as={Link} to={`${url}/manageProducts`} sx={{ textDecoration: 'none', color: 'black' }} />
          </ListItem>}

      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'lightgreen',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ textALign: 'center' }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 2, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/addReview`}>
            <AddReview></AddReview>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;