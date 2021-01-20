import React, { Fragment } from 'react';
import clsx from 'clsx';

// Route react
import { NavLink, Route } from 'react-router-dom';

// Material
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Logo_admin from '../../images/Logo_admin.png';
import '../AdminTemplate/AdminTemplate.scss';
const drawerWidth = 240;
// https://www.codota.com/code/javascript/functions/%2540material-ui%252Fcore/Theme/transitions
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: 'honeydew',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const AdminLayout = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <div style={{ background: '#fff !important' }} className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          style={{
            zIndex: '100',
          }}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap>
              <NavLink
                to='/dashboard'
                className='logo'
                style={{ textDecoration: 'none' }}
              >
                <img src={Logo_admin} alt='logo' style={{ width: 120 }} />
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant='permanent'
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          style={{
            background: '#fff',
            zIndex: '99',
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <NavLink
              to='/dashboard'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItem button key='Dashboard'>
                <AssignmentIndIcon
                  color='secondary'
                  style={{ marginRight: 32 }}
                />
                <ListItemText primary='Dashboard' />
              </ListItem>
            </NavLink>
            <NavLink
              to='/usermanagement'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItem button key='Thành viên'>
                <PeopleAltIcon style={{ marginRight: 32 }} />
                <ListItemText primary='Thành viên' />
              </ListItem>
            </NavLink>
            <NavLink
              to='/moviemanagement'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItem button key='Quản lý phim'>
                <LocalMoviesIcon style={{ marginRight: 32 }} />
                <ListItemText primary='Quản lý phim' />
              </ListItem>
            </NavLink>
            <NavLink
              to='/createshowtime'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItem button key='Tạo lịch chiếu'>
                <LibraryAddIcon style={{ marginRight: 32 }} />
                <ListItemText primary='Tạo lịch chiếu' />
              </ListItem>
            </NavLink>
            <NavLink
              to='/newsmanagement'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItem button key='Quản lý tin tức'>
                <NoteAddIcon style={{ marginRight: 32 }} />
                <ListItemText primary='Quản lý tin tức' />
              </ListItem>
            </NavLink>
          </List>
          <Divider />
          <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button key='Về trang chủ'>
              <ExitToAppIcon style={{ marginRight: 32 }} />
              <ListItemText primary='Về trang chủ' />
            </ListItem>
          </NavLink>
        </Drawer>
        <main className={classes.content} style={{ padding: '0px' }}>
          <div className={classes.toolbar} />
          <Typography paragraph>{props.children}</Typography>
        </main>
      </div>
    </Fragment>
  );
};
export const AdminTemplate = (props) => {
  return (
    <Route
      path={props.path}
      {...props.exact}
      render={(propsComponent) => {
        return (
          <AdminLayout>
            <props.Component {...propsComponent} />
          </AdminLayout>
        );
      }}
    />
  );
};
