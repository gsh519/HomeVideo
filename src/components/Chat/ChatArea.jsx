import React from 'react'
import {MessageList, MessageInputField} from './index'
import {makeStyles} from '@material-ui/styles'
import {useSelector} from 'react-redux';
import {getUserName} from '../../reducks/users/selectors'

const useStyles = makeStyles({
  root: {
    height: '80vh',
    display: 'grid',
    gridTemplateRows: '1fr auto',
  }
})

const ChatArea = () => {
  const classes = useStyles();
  const selector = useSelector(state => state);
  const username = getUserName(selector)
  console.log(username)
  return (
    <div className={classes.root}>
      <MessageList />
      <MessageInputField username={username} />
    </div>
  )
}

export default ChatArea