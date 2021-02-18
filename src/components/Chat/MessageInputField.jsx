import React from 'react'
import {makeStyles} from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

import {gravatarPath} from './Avatar'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
  }
})

const MessageInputField = (props) => {
  const {username} = props;
  const classes = useStyles();
  const avatar = gravatarPath('gipcompany@gmail.com');
  return (
    <div className={classes.root}>
      <p>{username}</p>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatar} />
        </Grid>
        <Grid item xs={10}>入力</Grid>
        <Grid item xs={1}>ボタン</Grid>
      </Grid>
    </div>
  )
}

export default MessageInputField