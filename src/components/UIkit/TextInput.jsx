import React from 'react'
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  input: {
    margin: '15px 0',
  }
})

const TextInput = (props) => {
  const classes = useStyles();
  return (
    <TextField
      fullWidth={props.fullWidth}
      label={props.label}
      type={props.type}
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      variant="outlined"
      value={props.value}
      onChange={props.onChange}
      className={classes.input}
    />
  )
}

export default TextInput