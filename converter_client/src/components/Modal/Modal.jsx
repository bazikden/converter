import React from 'react'
import { Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Button from '../Button/Button';



function getModalStyle() {
    return {
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    h1:{
        textAlign:"center"
    }
}));




export const AppModal = ({open,toogleModal,data}) => {
    const classes = useStyles()
    const [modalStyle] = React.useState(getModalStyle);

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h1 className={classes.h1}>Result</h1>
            <div><span>Success: </span>{data && data.success? "true":"false" }</div>
            <div><span>Passed: </span>{data && data.passed}</div>
            <div><span>Failed: </span>{data && data.failed}</div>
            <Button onClick={toogleModal} name="Ok"/>
        </div>
    )

    return (

        <Modal
            open={open}
            onClose={toogleModal}
            aria-labelledby="Post request result"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    )
}