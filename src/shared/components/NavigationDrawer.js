import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  withStyles,
  IconButton,
  Typography,
  withWidth,
  Collapse ,
  isWidthUp,
  Toolbar
} from "@material-ui/core";
import {ExpandMore , ExpandLess} from '@material-ui/icons';
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  closeIcon: {
    marginRight: theme.spacing(0.5)
  },
  headSection: {
    width: 200
  },
  blackList: {
    backgroundColor: theme.palette.common.black,
    height: "100%"
  },
  noDecoration: {

    textDecoration: "none !important"
  }
});

function NavigationDrawer(props) {
  const {
    width,
    open,
    onClose,
    anchor,
    classes,
    menuItems,
    selectedItem,
    theme
  } = props;

  useEffect(() => {
    window.onresize = () => {
      if (isWidthUp("sm", width) && open) {
        onClose();
      }
    };
  }, [width, open, onClose]);

  const [expand, setExpand] = React.useState(true);

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <Drawer variant="temporary" open={open} onClose={onClose} anchor={anchor}>
      <Toolbar className={classes.headSection}>
        <ListItem
          style={{
            paddingTop: theme.spacing(0),
            paddingBottom: theme.spacing(0),
            height: "100%",
            justifyContent: anchor === "left" ? "flex-start" : "flex-end"
          }}
          disableGutters
        >
          <ListItemIcon className={classes.closeIcon}>
            <IconButton onClick={onClose} aria-label="Close Navigation">
              <CloseIcon color="primary" />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </Toolbar>
      <List className={classes.blackList}>
        {menuItems.map(element => {
          if (element.link) {
            return (
              <Link
                key={element.name}
                to={element.link}
                className={classes.noDecoration}
                onClick={onClose}
              >
                <ListItem
                  button
                  selected={selectedItem === element.name}
                  /**
                   * We disable ripple as it will make a weird animation
                   * with primary and secondary color
                   */
                  disableRipple
                  disableTouchRipple
                >
                  {element.icon ? <ListItemIcon>{element.icon}</ListItemIcon> : ''}
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" className="text-white">
                        {element.name}
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            );
          }
          else if (element.list) {
              return (
                <Fragment  key={element.name}>
                   <ListItem
                     
                      button onClick={handleClick}
                      selected={selectedItem === element.name}
                      /**
                       * We disable ripple as it will make a weird animation
                       * with primary and secondary color
                       */
                      disableRipple
                      disableTouchRipple
                    >
                      {element.icon ? <ListItemIcon>{element.icon}</ListItemIcon> : ''} 
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" className="text-white">
                            {element.name}
                          </Typography>
                        }
                      />
                      {expand ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    {element.list.map((item) => {
                      return(
                        <Collapse key={item.name} in={expand} timeout="auto" unmountOnExit>
                          <Link
                            to={item.link}
                            className={classes.noDecoration}
                            onClick={onClose}
                          >
                            <List component="div" disablePadding>
                              <ListItem button className={classes.nested}>
                                {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon>: <div style={{paddingLeft:'20px'}}></div>}
                                <ListItemText
                                    primary={
                                      <Typography variant="body2" className="text-white">
                                        {item.name}
                                      </Typography>
                                    }
                                  />
                              </ListItem>
                            </List>
                          </Link>
                        </Collapse>
                      )
                    })}
                    
                </Fragment>
              )
          }
          return (
            <ListItem button key={element.name} onClick={element.onClick}>
              <ListItemIcon>{element.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" className="text-white">
                    {element.name}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

NavigationDrawer.propTypes = {
  anchor: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  selectedItem: PropTypes.string
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(NavigationDrawer)
);
