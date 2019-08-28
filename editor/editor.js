import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditorComponent extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            title: '',
            id: ''
        };
    };

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.editorContainer}>
                <ReactQuill value={this.state.text} onChange={this.updateBody}/>
            </div>
        );
    };
    updateBody = async (val) => {
        await this.setState({ text: val });
        this.updateBody();
    };
    update = debounce(() => {
        console.log('UPDATING DATABASE');
        //Come back later
    }, 1500);
};

export default withStyles(styles)(EditorComponent);

