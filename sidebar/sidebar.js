
import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebaritem';

class SidebarComponent extends Component {
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null
        };
    };

    render() {
        const { notes, classes, selectedNoteIndex } = this.props;
        return (
            <div className={classes.sidebarContainer}>
                <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>New Note</Button>
                {
                    this.state.addingNote ? 
                    <div>
                        <input type = 'text' clasName={classes.newNoteInput} placeholder="Enter note tile" onKeyUp={(e) => this.updateTitle(e.target.value)}>
                        </input>
                    </div> :
                    null
                }
            </div>
        );
    };
    newNoteBtnClick = () => {
        this.setState({ title: null, addingNote: !this.state.addingNote });
    };
    updateTitle = (txt) => {
        console.log('HERE IT IS: ', txt);
    };
};

export default withStyles(styles)(SidebarComponent)