import React, {useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createInterview} from '../../actions/list';
import useStyles from './styles';
const Create = () =>{
    const [postData, setPostData] = useState({ participants: '', startTime: '', endTime: ''});
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

          dispatch(createInterview(postData));
         
    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Schedule a new interview</Typography>
                <TextField name="participants" variant="outlined" label="Participants(coma seperated)" fullWidth value={postData.participants} onChange={(e) => setPostData({ ...postData, participants: e.target.value.split(',') })} />
                <TextField name="startTime" variant="outlined" label="Start Time" fullWidth value={postData.startTime} onChange={(e) => setPostData({ ...postData, startTime: e.target.value })} />
                <TextField name="endTime" variant="outlined" label="End Time" fullWidth value={postData.endTime} onChange={(e) => setPostData({ ...postData, endTime: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    );
}

export default Create;