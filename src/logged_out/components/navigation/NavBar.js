import React, {Fragment, memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  MenuItem,
  MenuList,
  Button,
  Hidden,
  IconButton,
  Popper,
  withStyles,
  Grow,
  Paper,
  ClickAwayListener  
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

function NavBar(props) {
  const {
    classes,
//    openRegisterDialog,
//    openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Inicio"
    },
    {
      link: "/acercade",
      name: "Acerca de LPN"
    },
    {
      link: "/casasLuz",
      name: "Casas de luz"
    },
    {
      name: "Ministerios",
      list: [
        {
          link: '/niños',
          name: "Niños"
        },
        {
          link: '/jovenes',
          name: "Jovenes"
        },
        {
          link: '/mujeres',
          name: "Mujeres"
        },
        {
          link: '/hombres',
          name: "Hombres"
        },
        {
          link: '/matrimonios',
          name: "Matrimonios"
        },
      ]
    },
    {
      link: "/blog",
      name: "Blog"
    },
    {
      link: "/cursos",
      name: "Cursos"
    }
    // {
    //   name: "Register",
    //   onClick: openRegisterDialog
    // },
    // {
    //   name: "Login",
    //   onClick: openLoginDialog
    // },
  ];

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  return (
    <div className={classes.root} >
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          
          <Hidden smDown >
          <div style={{paddingLeft:'100px'}} >
            <img align="center" height="90" width="90" alt=""  src={`${process.env.PUBLIC_URL}/logo.png`}  />
          </div>
          </Hidden >
          
          <Hidden mdUp>
          <div >
            <img align="center" height="90" width="90" alt=""  src={`${process.env.PUBLIC_URL}/logo.png`}  />
          </div>
          </Hidden>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map(element => {
                if (element.list) {
                  return(
                    <Fragment  key={element.name}>
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                      >
                        {element.name}
                      </Button>

                      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                {element.list.map(item => {
                                  return(
                                    <Link
                                      key={item.name + "link"}
                                      to={item.link}
                                      className={classes.noDecoration}
                                      onClick={handleMobileDrawerClose}
                                    >
                                      <MenuItem 
                                        style={{color:'#24282C'}}
                                        key={item.name}
                                        onClick={handleClose}
                                      >
                                        {item.name}
                                      </MenuItem>
                                    </Link>
                                  )
                                })}
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                      </Popper>
                    </Fragment>
                  )
                  
                }
                else if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
