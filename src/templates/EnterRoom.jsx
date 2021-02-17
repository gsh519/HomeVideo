import React, {useState, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextInput} from '../components/UIkit'
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux'
import {enterRoom} from '../reducks/rooms/operations'

const useStyles = makeStyles({
  root: {
    width: 335,
    margin: '40px auto 0',
    display: 'grid',
    placeContent: 'center',
  },
  card: {
    maxWidth: 335,
    padding: 20,
    marginBottom: 30,
  },
});

const CreateRoom = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [password, setPassword] = useState(""),
        [roomId, setRoomId] = useState("");

  const inputPassword = useCallback((event) => {
    setPassword(event.target.value)
  }, [setPassword])

  const inputRoomId = useCallback((event) => {
    setRoomId(event.target.value)
  }, [setRoomId])

  return (
    <div className={classes.root}>
      <h2 className='center'>部屋に入る</h2>
      <Card className={classes.card}>
        <CardContent>
          <TextInput
            fullWidth={true}
            label={'部屋のID'}
            type={'text'}
            multiline={false}
            required={true}
            rows={1}
            variant="outlined"
            value={roomId}
            onChange={inputRoomId}
          />

          <TextInput
            fullWidth={true}
            label={'部屋のパスワード'}
            type={'password'}
            multiline={false}
            required={true}
            rows={1}
            variant="outlined"
            value={password}
            onChange={inputPassword}
          />
        </CardContent>
      </Card>
      <Button variant="contained" color='primary' className='btn' onClick={() => dispatch(enterRoom(roomId, password))}>部屋に入る</Button>
    </div>
  )
}

export default CreateRoom