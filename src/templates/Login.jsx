import React, {useState, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextInput} from '../components/UIkit'
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux'
import {login} from '../reducks/users/operations'
import {push} from 'connected-react-router'

const useStyles = makeStyles({
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
  signup: {
    marginTop: 20,
    cursor: 'pointer',
    textAlign: 'center'
  }
});

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');


  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [setEmail])

  const inputPassword = useCallback((event) => {
    setPassword(event.target.value)
  }, [setPassword])

  return (
    <div className={classes.root}>
      <h2 className='center'>ログイン</h2>
      <Card className={classes.card}>
        <CardContent>
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
        </CardContent>
      </Card>
      <Button variant="contained" color='primary' className='btn' onClick={() => dispatch(login(email, password))}>ログイン</Button>
      <p className={classes.signup} onClick={() => dispatch(push('/signup'))}>＊アカウントをお持ちでない方はこちら</p>
    </div>
  )
}

export default SignUp