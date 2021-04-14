import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { MenuWrapper } from './appMenuDrawer.style';
import { appMenuLinks } from '../../../content/layout/appMenuLinks';

export function AppMenuDrawer(): JSX.Element {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = (isOpen: boolean) => (event: { type: string; key?: string }) => {
    if (event.type === 'keydown' && (event?.key === 'Tab' || event?.key === 'Shift')) {
      return;
    }

    setIsDrawerOpen(isOpen);
  };

  const list = (
    <MenuWrapper role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <IconButton edge="end" color="inherit" aria-label="close menu" onClick={toggleDrawer(false)}>
        <CloseIcon />
      </IconButton>
      <Divider />
      <List>
        {appMenuLinks.map((appMenuLink) => (
          <ListItem button key={appMenuLink.text} component="a" href={appMenuLink.link}>
            <ListItemText primary={appMenuLink.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </MenuWrapper>
  );

  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
}
