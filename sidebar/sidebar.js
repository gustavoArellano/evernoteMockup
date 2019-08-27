import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styels';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaridtem/sidebarItem';

class SidebarComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>Hello from sidebar</div>
        )
    }
}

export default withStyles(styles)(SidebarComponent)