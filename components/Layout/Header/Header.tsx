import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { AppMenuDrawer } from '../AppMenuDrawer/AppMenuDrawer';

export default function Header(): JSX.Element {
  return (
    <AppBar position="static">
      <Toolbar>
        <AppMenuDrawer />
        <Typography variant="h6">OUT WITH GOUT</Typography>
      </Toolbar>
    </AppBar>
  );
}
