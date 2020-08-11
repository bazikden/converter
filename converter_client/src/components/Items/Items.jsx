import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import Button from '../Button/Button'
import { Api } from '../../api/api'
import { useDispatch } from 'react-redux'
import { SetErrorAction } from '../../redux/actions/ItemsActions'


const useStyles = makeStyles({
    header: {
        textAlign: 'center'
    },
    box: {
        color: '#3f51b5',
        border: '2px solid #3f51b5',
        margin: '5px 20px',
        padding: '10px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: "spapce-around"
    },
    span: {
        marginLeft: '20px',
        width: '30%',
        textAlign: 'center'
    },
    number: {
        width: "50px"
    }
})

export default ({ items, setData, onBtnLoadClick }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const onPostBtnClick = async () => {
        try {
            const check = await Api.postTransactions(items)
            setData(check.data.data)
        } catch (error) {
            dispatch(SetErrorAction())
        }


    }

    const mapItems = (item, index) => (
        <Box className={classes.box} key={item.createdAt + item.checkSum}>
            <span className={classes.number} >{index + 1}.</span>
            <span className={classes.span}>Currency: {item.currency}</span>
            <span className={classes.span}>Amount: {item.amount}</span>
            <span className={classes.span}>Converted Amount: {item.convertedAmount} </span>
        </Box>
    )
    if(items.length > 0){
        return (
            <div>
                <h1 className={classes.header}>Converted items</h1>
                {
                    items.map(mapItems)
                }

                <div>
                    <Button onClick={onBtnLoadClick} name="Load More" />
                    <Button onClick={onPostBtnClick} name="Post data" />
                </div>
            </div>
        )
    }else{
        return <h1 className={classes.header}>Please load transactions</h1>
    }
}