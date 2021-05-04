import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Contents from "./contents";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TopNavbar from './TopNavbar';
import Ajith from './actors/ajith';
import Rajini from './actors/rajini';
import Vijay from './actors/vijay';
import Dhanush from './actors/dhanush';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
   
  },
  appBar: {
    background:'#fff',
    color:'black',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
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
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
  

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [ajith,setAjith] = React.useState(false);
  const [rajini,setRajini] = React.useState(false);
  const [vijay,setVijay] = React.useState(false);
  const [dhanush,setDhanush] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleDropdown = (e)=>{
    var currentValue = e.target.value;
    if(currentValue == ""){
      setAjith(false);
      setRajini(false);
      setVijay(false);
      setDhanush(false);
    }
    if(currentValue == 10 ){
      setAjith(true);
      setRajini(false);
      setVijay(false);
      setDhanush(false);
    }
    if(currentValue == 20){
      setRajini(true);
      setAjith(false);
      setVijay(false);
      setDhanush(false);
    }
    if(currentValue == 30){
      setVijay(true);
      setRajini(false);
      setAjith(false);
      setDhanush(false);
    }
    if(currentValue == 40){
      setDhanush(true);
      setVijay(false);
      setRajini(false);
      setAjith(false);
    }
    console.log(e.target.value);
  }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
       <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
          
        <Toolbar>
       
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
             
            <MenuIcon />
          </IconButton>
          <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
        <Select
          native
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
          onChange={handleDropdown}
        >
          <option aria-label="None" value="" />
          <option  onChange={handleDropdown} value={10}>Ajith</option>
          <option onClick={handleDropdown} value={20}>Rajini</option>
          <option value={30}>Vijay</option>
          <option value={40}>Dhanush</option>
        </Select>
      </FormControl>
      <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="primary"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar> 
      <Drawer
        variant="permanent"
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
      >
        <div className={classes.toolbar}>
        <Typography>
              Smart-Ex
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        
        <Divider />
        <List>
          {['Profile', 'Office Administration', 'Company Policies'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
      <div className={classes.toolbar} />
      {ajith ? <Ajith/> : ''}
      {rajini ? <Rajini/> : ''}
      {vijay ? <Vijay/> : ''}
      {dhanush ? <Dhanush/> : ''}             
      </main>
    </div>
  );
}