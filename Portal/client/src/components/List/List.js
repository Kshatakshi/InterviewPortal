import React from 'react';
import Interview from './Interview/Interview';
import useStyles from './styles';
import { useSelector, useStore } from 'react-redux';

const List = () =>{
    const list = useStore().getState().list;
    const classes = useStyles();
    // console.log(useStore().getState().list);
    console.log(list);
    return(
        <>
        <h2>Scheduled Interviews</h2>
        <Interview/>
        <Interview/>
        </>
    );
}

export default List;