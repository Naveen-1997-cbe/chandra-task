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
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Sachin from "../favroite/sachin";
import Card from "../component/card";
import "./sidebar.css";
import Array from "../../components/array/array";
import tendulkar from "../photos/sachin.jpg";
import ajithkumar from "../photos/ajith.jpg";
import christopher from "../photos/nolan.jpg";
import ar from "../photos/rahman.jpg";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
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
  btn:{
      color:"#fff",
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
 const sach = require("../photos/sachin.jpg");
  const [sachin,setFavourite] = React.useState([
    {
      id:1,
      name:'Sachin',
      image: tendulkar,
      field:'Inidan Cricketer',
      achievements:'Bharath Ratna',
      born:'27th April 1975',
      content1:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God',
      content2:'You ve heard the chant You may not have heard of the sport but you ve heard the chant The chant one that a billion people once lived by one that would originate from the Wankhede and echo across the city and the seas It is a name that continues to inspire many not only in India but all over the world to take up the sport Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest yet he maintained that he wasnt greater than than the gameTo the people of India the 55 giant of a man was much more than thatHe was an emotion a symbol of hope in a nation that revered him as nothing short of a God'
    }, ])
    const [ajith,setAjith] = React.useState([
      {
        id:2,
        name:'Ajith Kumar',
        image:ajithkumar,
        field:'Actor',
        achievements:'Pathma Vibushan',
        born:'1st May 1971',
        content1:'Ajith Kumar is an Indian film actor who has worked mainly in Tamil cinema. He is one of the leading actors in Tamil Cinema. He began his career as a supporting actor in a Telugu film before gaining critical recognition in the Tamil thriller Aasai (1995). A succession of high-grossing films followed where Ajith was usually depicted as a romantic hero, with Kadhal Kottai (1996) and Kadhal Mannan (1998) being the most notable. He later forayed into method acting, as seen in Vaali (1999), Mugavaree (2000), Kandukondain Kandukondain (2000) and Citizen (2001) before establishing himself as an action hero with popular films including Amarkalam (1999), Dheena (2001), Villain (2002), Varalaru (2006) and Billa (2007). He has won three Filmfare Best Actor Awards in Tamil, all for films which showcased him in multiple roles. Ajith performs predominantly in leading roles in major studio films, genres ranging from romantic comedies and drama to action thrillers.',
        content2:'Ajith Kumar is an Indian film actor who has worked mainly in Tamil cinema. He is one of the leading actors in Tamil Cinema. He began his career as a supporting actor in a Telugu film before gaining critical recognition in the Tamil thriller Aasai (1995). A succession of high-grossing films followed where Ajith was usually depicted as a romantic hero, with Kadhal Kottai (1996) and Kadhal Mannan (1998) being the most notable. He later forayed into method acting, as seen in Vaali (1999), Mugavaree (2000), Kandukondain Kandukondain (2000) and Citizen (2001) before establishing himself as an action hero with popular films including Amarkalam (1999), Dheena (2001), Villain (2002), Varalaru (2006) and Billa (2007). He has won three Filmfare Best Actor Awards in Tamil, all for films which showcased him in multiple roles. Ajith performs predominantly in leading roles in major studio films, genres ranging from romantic comedies and drama to action thrillers.',

      },
    ])
    const [nolan,setNolan] = React.useState([
      {
        id:3,
        name:'Christopher Nolan',
        image:christopher,
        field:'Director',
        achievements:'Empire Award',
        born:'30th July 1970',
        content1:'Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.',
        content1:'Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.'

      },
    ])
    const [rahman,setRahman] = React.useState([
      {
        id:4,
        name:'Ar Rahman',
        image:ar,
        field:'Music Director',
        achievements:'Oscar',
        born:'6th January 1967',
        content1:'A two-time winner and five-times nominee of the Academy Award (Oscar), A. R. Rahman is popularly known as the man who has redefined contemporary Indian music. Rahman, according to a BBC estimate, has sold more than 150 million copies of his work comprising of music from more than 100 film soundtracks and albums across over half a dozen languages, including landmark scores such as Roja Bombay, Dil Se Taal Lagaan  Vandemataram  Jodhaa Akbar Slumdog Millionaire 127 Hours and countless more.',
        content1:'A two-time winner and five-times nominee of the Academy Award (Oscar), A. R. Rahman is popularly known as the man who has redefined contemporary Indian music. Rahman, according to a BBC estimate, has sold more than 150 million copies of his work comprising of music from more than 100 film soundtracks and albums across over half a dozen languages, including landmark scores such as Roja Bombay, Dil Se Taal Lagaan  Vandemataram  Jodhaa Akbar Slumdog Millionaire 127 Hours and countless more.',

      }
    ])
    
 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <BrowserRouter>
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
          <Typography variant="h6" noWrap>
             <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.btn}>
        Favourites
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/sachin" className="menulist">Sachin</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/ajith"  className="menulist">Ajith</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/nolan"  className="menulist">Nolan</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/arrahman"  className="menulist">Ar Rahman</Link></MenuItem>
      </Menu>
          </Typography>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText><Link to="/sachin">{text}</Link></ListItemText>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
            <Route path="/sachin">
               <Card contents={sachin}/> 
            </Route>
            <Route path="/ajith">
              <Card contents={ajith}/>
            </Route>
            <Route path="/nolan">
              <Card contents={nolan}/>
            </Route>
            <Route path="/arrahman">
              <Card contents={rahman}/>
            </Route>
            <Route path="/array">
                <Array/>
            </Route>
        </Switch>
      </main>
    </div>
    </BrowserRouter>
  );
}
