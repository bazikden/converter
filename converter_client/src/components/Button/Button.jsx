import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    btn: {
        margin: '10px auto',
        display: 'block'
    }
})

export default ({ onClick, name }) => {
    const classes = useStyles()

    return (
        <Button onClick={onClick} className={classes.btn} variant="contained" color="primary">{name}</Button>
    )
}