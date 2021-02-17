import React, {useState, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextInput} from '../components/UIkit'
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux'
import {setRoom} from '../reducks/rooms/operations'

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
        [roomName, setRoomName] = useState("");

  const inputPassword = useCallback((event) => {
    setPassword(event.target.value)
  }, [setPassword])

  const inputRoomName = useCallback((event) => {
    setRoomName(event.target.value)
  }, [setRoomName])

  return (
    <div className={classes.root}>
      <h2 className='center'>部屋を作る</h2>
      <Card className={classes.card}>
        <CardContent>
          <TextInput
            fullWidth={true}
            label={'部屋名'}
            type={'text'}
            multiline={false}
            required={true}
            rows={1}
            variant="outlined"
            value={roomName}
            onChange={inputRoomName}
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
      <Button variant="contained" color='primary' className='btn' onClick={() => dispatch(setRoom(roomName, password))}>部屋を作る</Button>
    </div>
  )
}

export default CreateRoom