import React, {useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import {MessageField} from './index'

import {gravatarPath} from './Avatar'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
  }
})

const MessageInputField = (props) => {
  const {username} = props;
  const classes = useStyles();
  const avatar = gravatarPath(username);

  const [text, setText] = useState('');

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatar} />
        </Grid>
        <Grid item xs={10}>
          <MessageField username={username} text={text} setText={setText} />
        </Grid>
        <Grid item xs={1}>ボタン</Grid>
      </Grid>
    </div>
  )
}

export default MessageInputField