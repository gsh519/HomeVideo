import React, {useState, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextInput} from '../components/UIkit/'
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux'
import {signUp} from '../reducks/users/operations'
import {push} from 'connected-react-router'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 335,
    margin: '0 auto',
    display: 'grid',
    placeContent: 'center',
  },
  card: {
    maxWidth: 335,
    padding: 20,
    marginBottom: 30,
  },
  login: {
    marginTop: 20,
    cursor: 'pointer',
    textAlign: 'center'
  }
}));

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [username, setUserName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [confirmPassword, setConfirmPassword] = useState('');

  const inputUserName = useCallback((event) => {
    setUserName(event.target.value)
  }, [setUserName])

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [setEmail])

  const inputPassword = useCallback((event) => {
    setPassword(event.target.value)
  }, [setPassword])

  const inputConfirmPassword = useCallback((event) => {
    setConfirmPassword(event.target.value)
  }, [setConfirmPassword])

  return (
    <div className={classes.root}>
      <h2 className='center'>アカウント登録</h2>
      <Card className={classes.card}>
        <CardContent>
          <TextInput
            fullWidth={true}
            label={'アカウント名'}
            type={'text'}
            multiline={false}
            required={true}
            rows={1}
            variant="outlined"
            value={username}
            onChange={inputUserName}
          />

          <TextInput
            fullWidth={true}
            label={'メールアドレス'}
            type={'email'}
            multiline={false}
            required={true}
            rows={1}
            variant="outlined"
            value={email}
            onChange={inputEmail}
          />

          <TextInput
            fullWidth={true}
            label={'パスワード'}
            type={'password'}
            multiline={false}
            required={true}
            rows={1}
            variant="outlined"
            value={password}
            onChange={inputPassword}
          />

          <TextInput
            fullWidth={true}
            label={'パスワード確認'}
            type={'password'}
            multiline={false}
            required={true}
            rows={1}
            variant="outlined"
            value={confirmPassword}
            onChange={inputConfirmPassword}
          />
        </CardContent>
      </Card>
      <Button variant="contained" color='primary' className='btn' onClick={() => dispatch(signUp(username, email, password, confirmPassword))}>登録</Button>
      <p className={classes.login} onClick={() => dispatch(push('/login'))}>＊アカウントをお持ちのかたはこちら</p>
    </div>
  )
}

export default SignUp