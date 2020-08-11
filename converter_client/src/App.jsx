import React, { useState, useEffect, useRef } from 'react';
import { Container } from '@material-ui/core';
import { Alert } from '@material-ui/lab'
import Button from './components/Button/Button'
import { Loader } from './components/Loader/Loader';
import Items from "./components/Items/Items"
import { useSelector, useDispatch } from 'react-redux';
import { Api } from './api/api'
import { ClearErrorAction, SetErrorAction, AddItemsAction } from './redux/actions/ItemsActions';
import { AppModal } from './components/Modal/Modal';


function App() {
  const [isLoading, setIsLoading] = useState(false)
  const items = useSelector(state => state.items)
  const [open, setOpen] = useState(false)
  const containerRef = useRef()
  const dispatch = useDispatch()
  const [modalData, setModalData] = useState(null)
  const toogleModal = () => {
    setOpen(prev => !prev)
  }

  useEffect(() => {
    items.items.length >= 20 && (containerRef.current.parentNode.style.position = "relative")
  }, [items])


  const onBtnLoadClick = async () => {
    const promises = []
    const transactions = []
    dispatch(ClearErrorAction())
    setIsLoading(true)
    for (let i = 0; i < 10; i++) {
      promises.push(Api.getTransactions())
    }
    try {
      const data = await Promise.all(promises)
      data.forEach(elem => {
        transactions.push(elem.data.data)
      })
      dispatch(AddItemsAction(transactions))
      setIsLoading(false)
    } catch (error) {
      dispatch(SetErrorAction())
      setIsLoading(false)
    }
  }

  const setData = (data) => {
    setModalData(data)
    setOpen(true)
  }



  return (
    <Container ref={containerRef}>
      <AppModal open={open} toogleModal={toogleModal} data={modalData} />
      {
        items.items.length === 0 && <Button onClick={onBtnLoadClick} name="Load Data" />

      }

      {
        isLoading && <Loader />

      }
      {
        items.error && <Alert severity="error">{items.error}</Alert>
      }
      <Items items={items.items} setData={setData} onBtnLoadClick={onBtnLoadClick} />

    </Container>
  );
}

export default App;
